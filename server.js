// Set up node.js server
require("isomorphic-fetch");
const dotenv = require("dotenv");
const Koa = require("koa");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");
dotenv.config();

// Set up GraphQL. npm install --save graphql apollo-boost react-apollo
// npm install --save @shopify/koa-shopify-graphql-proxy
const { default: graphQLProxy } = require("@shopify/koa-shopify-graphql-proxy");
const Router = require("koa-router");
const {
  receiveWebhook,
  registerWebhook,
} = require("@shopify/koa-shopify-webhooks");

// Add the version of the API to the proxy, usually the most recent.
const { ApiVersion } = require("@shopify/koa-shopify-graphql-proxy");

// Call to getSubscriptionUrl for billing API
const getSubscriptionUrl = require("./server/getSubscriptionUrl");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
                                                // Add HOST from .env for webhooks
const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, HOST } = process.env;

// Add app
app.prepare().then(() => {
  // Add routing middleware and koa server
  const server = new Koa();
  const router = new Router();
  server.use(session({ secure: true, sameSite: "none" }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    // Add createShopifyAuth middleware
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      // Access scopes determine which actions your app can perform on a store
      scopes: ['read_products', 'write_products'],
      // This function takes the API key and secret, then triggers authentication screen
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        // Set shop origin in cookies from the user's session
        ctx.cookies.set("shopOrigin", shop, {
          httpOnly: false,
          secure: true,
          sameSite: "none",
        });

        // Register a webhook for product creation.
        const registration = await registerWebhook({
          address: `${HOST}/webhooks/products/create`,
          topic: "PRODUCTS_CREATE",
          accessToken,
          shop,
          apiVersion: ApiVersion.October19, // might need to be updated https://partners.shopify.com/1567645/apps/3865695/edit
        });

        registration.success
          ? console.log("Succesfully registered webhook")
          : console.log("Failed to register webhook", registration.result);

        await getSubscriptionUrl(ctx, accessToken, shop);
      },
    })
  );

  // Receive webhooks when a product is created
  const webhook = receiveWebhook({secret: SHOPIFY_API_SECRET_KEY});
// Router probably?
  router.post('/webhooks/products/create', webhook, (ctx) => {
    console.log('received webhook: ', ctx.state.webhook);
  });

  // Use GraphQL                    // version of API
  server.use(graphQLProxy({ version: ApiVersion.October19 }));
  // Add verifyRequest middleware. Redirects users to the OAuth route if they haven't been authenticated

  // Send verify.Request() and the app code through the router
  router.get('*', verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
   });
   server.use(router.allowedMethods());
   server.use(router.routes());

  // Set up server to run on port 3000
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
