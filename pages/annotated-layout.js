import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
} from "@shopify/polaris";
// View all the components in Polaris library here: https://polaris.shopify.com/components/get-started

class AnnotatedLayout extends React.Component {
  state = {
    discount: "10%",
  };
  // render method returns React elements https://reactjs.org/docs/react-component.html#render
  render() {
    // Next 3 lines: Add settings toggle part 1
    const { discount, enabled } = this.state;
    const contentStatus = enabled ? "Disable" : "Enable";
    const textStatus = enabled ? "enabled" : "disabled";

    return (
      // Add Polaris components
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Default discount"
            description="Add a product to Sample App, it will automatically be discounted."
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange("discount")}
                    label="Discount percentage"
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>

          {/* This section: Add settings toggle part 2 */}
          <Layout.AnnotatedSection
            title="Price updates"
            description="Temporarily disable all Sample App price updates"
          >
            <SettingToggle
              action={{
                content: contentStatus,
                onAction: this.handleToggle,
              }}
              enabled={enabled}
            >
              This setting is{" "}
              <TextStyle variation="strong">{textStatus}</TextStyle>
            </SettingToggle>
          </Layout.AnnotatedSection>

        </Layout>
      </Page>
    );
  }

  handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log("submission", this.state);
  };

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };

  // Add settings toggle part 3
  handleToggle = () => {
    this.setState(({ enabled }) => {
      return { enabled: !enabled };
    });
  };
}

export default AnnotatedLayout;