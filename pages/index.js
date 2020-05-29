import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from 'store-js';
// Add Resource List to the app
import ResourceListWithProducts from '../components/ResourceList';

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
// Add class that sets a state for the resource picker
class Index extends React.Component {
  state = { open: false };
  render() {
    // Import IDs from localStorage with store get method, then wrap page in emptyState ? conditional
    const emptyState = !store.get('ids');
    return (
      // Page component imported from Polaris
      <Page>
         {/* Import TitleBar from App Bridge React... */}
        <TitleBar
        // ...and pass it the primary action props
          primaryAction={{
            content: "Select products",
            // Triggers resource picker
            onAction: () => this.setState({ open: true }),
          }}
        />
        {/*  add the ResourcePicker component to the primary action button on the EmptyState component */}
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {/* emptyState conditional from localStorage */}
        {emptyState ? (
        // Layout component imported from Polaris
        <Layout>
          {/* Empty state component imported from Polaris */}
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: "Select products",
              // Polaris components take the onAction prop to pass a callback function.
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Select products to change their price temporarily</p>
          </EmptyState>
        </Layout>
        ) : (
        <ResourceListWithProducts />
        )}
      </Page>
    );
  }

  
  handleSelection = (resources) => {
    // Pass data from the resource picker
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    //store.js is a cross-browser JavaScript library for managing localStorage, to set and receive data using the store_set and store_get methods. This works well for testing your development app. But if you were building this app in production, then you’d probably want to store these IDs in a database. npm install --save store-js
    store.set('ids', idsFromResources);
  };
}

export default Index;
