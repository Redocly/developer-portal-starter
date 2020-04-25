---
title: Integrating API Reference
---

# Integrating API Reference with the Portal

The **Redocly Portal** provides the possibility to integrate the API definition.
To do this, complete the following steps:

#### Step 1.  Declare your API definition.

Inside of `siteConfig.yaml`, add a declaration of all of your API
definitions:

```yaml
oasDefinitions:
  petstore: ./openapi/petstore.yaml
```
The definition may be in expanded format -- [OpenAPI Generator](https://github.com/Redocly/create-openapi-repo), then pass a path to the folder:

```yaml
oasDefinitions:
  petstore: ./openapi/petstore/
```

The definition may also be a remote URL:

```yaml
oasDefinitions:
  petstore: https://example.com/petstore.yaml
```

#### Step 2.  Add pages that reference those definitions.

Manually create a file `reference.page.yaml` (you may name it differently) with the following contents:

```yaml
type: redoc
definitionId: petstore
tags: ['pet', 'user']
showInfo: true
expand: true
```

| Field  | Description |
| ------------- | ------------- |
| `type` | In the current version, only the `redoc` type is supported.|
| `definitionId`  | References the key(s) declared in the `siteConfig.yaml`. In this example, the `petstore` is declared as the key. |
| `tags` | <ul><li>`showInfo` – Shows the API definition's description as an overview page.</li><li>`expand` – Determines if it will be expanded into multiple menu navigation items automatically.</li><ul> |



#### Step 3.  Reference the pages from the sidebar (or other places).

Here is an example snippet within the `sidebars.yaml`:

```yaml
    pages:
      - page: reference.page.yaml#operation/createUsersWithArrayInput
      - page: reference.page.yaml/*
```

The first page displays only a specific operation.

The second page shows all operations (`*` is a wildcard).

#### Step 4.  Use components from within markdown extension pages.

Within a `.mdx` file, you would import the component, such as `RedocResponse`:
```jsx
import { RedocResponse } from '@redocly/ui';
```

Then you can use it as follows:

With Samples Panel:
```html
<RedocResponse definitionId="petstore" pointer="#/components/responses/PetResponse" />
```
<RedocResponse definitionId="petstore" pointer="#/components/responses/PetResponse" />

Without Samples Panel:

```html
<RedocResponse definitionId="petstore" pointer="#/components/responses/PetResponse" hideSamples={true} />
```
<RedocResponse definitionId="petstore" pointer="#/components/responses/PetResponse" hideSamples={true} />


