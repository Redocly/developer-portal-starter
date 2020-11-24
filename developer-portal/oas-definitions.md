# OpenAPI spec definitions

The developer portal may contain multiple API definitions.

Define that in the `siteConfig.yaml` file.

```yaml
oasDefinitions:
  petstore: ./openapi/petstore.yaml
```

Notice that the petstore is pointing to an API definition on the local filesystem.

For a great docs-like-code experience, we recommend pointing to our API registry links.
That will cause any update to those API definitions to trigger an update to your developer portal.

A private definition can be shared by using our login functionality.

This is outside of the scope of this training exercise.

## Add more OpenAPI definitions

Follow the example here, but utilize your own API definitions and rename them accordingly.
If your API definitions are accessible by URL, you may use those.
Or else, add it to the local file system.

```yaml
oasDefinitions:
  petstore: ./openapi/petstore.yaml
  ultra: ./openapi/ultra-api.yaml
  max: https://example.com/max/openapi.yaml
```

### Add a page yaml file

This project includes a sample petstore API.
There is a file at `openapi/reference.page.yaml`.

The contents utilize the key `petstore` defined in the `siteConfig.yaml`.

```yaml
type: redoc
definitionId: petstore
showInfo: true
expand: true
```

That provides the additional metadata we need to render the API.

Read the [docs](https://docs.redoc.ly/developer-portal/redoc-integration/) about the available properties, and how to utilize this page within the sidebar.

Be sure to add reference to your page in the `sidebars.yaml`.

Do you see your API reference docs?
If not, it may require a [`yarn clean` cache clearing action](/developer-portal/setup/#clearing-cache).


### Linking to an OpenAPI operation

Construct the link like `[link text](path-to-page.yaml#operation/{operationId})`.

Here is a link to [update a pet](../openapi/reference.page.yaml#operation/updatePet).


```md
Here is a link to [update a pet](../openapi/reference.page.yaml#operation/updatePet).
```
