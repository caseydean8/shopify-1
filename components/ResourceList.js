import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card, ResourceList, Stack, TextStyle, Thumbnail } from "@shopify/polaris";
import store from 'store-js';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';

//The getProducts query accepts an array of IDs and returns the product’s title, handle, description, and ID. You’ll also request the product image’s URL and alt text, as well as the product’s price. In this case, you want to assign the query to a constant so it can be used in the query component. You’ll also need to use graphql-tag to parse the query so the component can read it.
const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

// Apollo’s components use the render props pattern in React to show loading and error states. In this example, you’ve set loading and error states for when the Apollo query component is rendering or an error occurs.
class ResourceListWithProducts extends React.Component {
  static contextType = Context;
  // When users click items, they’ll be set in the localStorage. The clicked item, which is the product in this case, will generate information in the edit product form.
  render() {
    const app = this.context;
    const redirectToProduct = () => {
      const redirect = Redirect.create(app);
      redirect.dispatch(
        Redirect.Action.APP,
        '/edit-products',
      );
    };

    const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();

    return (
      <Query query={GET_PRODUCTS_BY_ID} variables={{ ids: store.get('ids') }}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>{error.message}</div>;
          console.log(data);
          return (
            <Card>
              {/* UI for Resource List */}
              <ResourceList
                showHeader
                resourceName={{ singular: 'Product', plural: 'Products' }}
                items={data.nodes}
                renderItem={item => {
                  const media = (
                    <Thumbnail
                      source={
                        item.images.edges[0]
                          ? item.images.edges[0].node.originalSrc
                          : ''
                      }
                      alt={
                        item.images.edges[0]
                          ? item.images.edges[0].node.altText
                          : ''
                      }
                    />
                  );
                  const price = item.variants.edges[0].node.price;
                  return (
                    <ResourceList.Item
                      id={item.id}
                      media={media}
                      accessibilityLabel={`View details for ${item.title}`}
                      // Clicked item sends info to resource list
                      onClick={() => {
                        store.set('item', item);
                        redirectToProduct();
                      }}
                    >
                      <Stack>
                        <Stack.Item fill>
                          <h3>
                            <TextStyle variation="strong">
                              {item.title}
                            </TextStyle>
                          </h3>
                        </Stack.Item>
                        <Stack.Item>
                          <p>${price}</p>
                        </Stack.Item>
                        <Stack.Item>
                          <p>Expires on {twoWeeksFromNow} </p>
                        </Stack.Item>
                      </Stack>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card>
          );
        }}
      </Query>
    );
  }
}

export default ResourceListWithProducts;
