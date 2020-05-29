import {
  Banner,
  Card,
  DisplayText,
  Form,
  FormLayout,
  Frame,
  Layout,
  Page,
  PageActions,
  TextField,
  Toast,
} from "@shopify/polaris";
import store from "store-js";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// Add UPDATE_PRICE mutatation
const UPDATE_PRICE = gql`
  mutation productVariantUpdate($input: ProductVariantInput!) {
    productVariantUpdate(input: $input) {
      product {
        title
      }
      productVariant {
        id
        price
      }
    }
  }
`;

class EditProduct extends React.Component {
  state = {
    discount: "",
    price: "",
    variantId: "",
    showToast: false,
  };

  // This form has its state set with data from the store. When the component mounts, the itemToBeConsumed requests the clicked item from your store, and sets up state and variables. This form will be rendered on click using the redirect action from Shopify App Bridge.
  componentDidMount() {
    this.setState({ discount: this.itemToBeConsumed() });
  }

  render() {
    const { name, price, discount, variantId } = this.state;
    // Add Apollo mutation
    return (
      <Mutation mutation={UPDATE_PRICE}>
        {(handleSubmit, { error, data }) => {
          // Add a Toast component for a success message and a Banner component for an error message
          const showError = error && (
            <Banner status="critical">{error.message}</Banner>
          );
          const showToast = data && data.productVariantUpdate && (
            <Toast
              content="Succesfully updated"
              onDismiss={() => this.setState({ showToast: false })}
            />
          );
          return (
            <Frame>
              <Page>
                <Layout>
                  
                  {/* The Toast component needs to be wrapped in the Frame component */}
                  {showToast}
                  <Layout.Section>{showError}</Layout.Section>
                  
                  <Layout.Section>
                    <DisplayText size="large">{name}</DisplayText>
                    <Form>
                      <Card sectioned>
                        <FormLayout>
                          <FormLayout.Group>
                            <TextField
                              prefix="$"
                              value={price}
                              disabled={true}
                              label="Original price"
                              type="price"
                            />
                            <TextField
                              prefix="$"
                              value={discount}
                              onChange={this.handleChange("discount")}
                              label="Discounted price"
                              type="discount"
                            />
                          </FormLayout.Group>
                          <p>This sale price will expire in two weeks</p>
                        </FormLayout>
                      </Card>
                      <PageActions
                        primaryAction={[
                          {
                            content: "Save",
                            // Add id and price variables to the productVariableInput constant:
                            onAction: () => {
                              const productVariableInput = {
                                id: variantId,
                                price: discount,
                              };
                              // Add the handleSubmit and pass it the productVariableInput
                              handleSubmit({
                                variables: { input: productVariableInput },
                              });
                            },
                          },
                        ]}
                        secondaryActions={[
                          {
                            content: "Remove discount",
                          },
                        ]}
                      />
                    </Form>
                  </Layout.Section>
                </Layout>
              </Page>
            </Frame>
          );
        }}
      </Mutation>
    );
  }

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };

  itemToBeConsumed = () => {
    const item = store.get("item");
    const price = item.variants.edges[0].node.price;
    const variantId = item.variants.edges[0].node.id;
    const discounter = price * 0.1;
    this.setState({ price, variantId });
    return (price - discounter).toFixed(2);
  };
}

export default EditProduct;
