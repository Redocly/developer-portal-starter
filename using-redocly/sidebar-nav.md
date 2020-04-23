---
title: Control your left sidebar navigation
---

# Sidebar navigation

This page describes how to customize your left sidebar navigation using the `sidebars.yaml` file.

---

### Overview ###

Using the `sidebars.yaml` file, you can define what to show on the left navigation pane.

**NOTE**: While there is support for multiple sidebar navigation schemes, it is most common to use one.

Below is a sample file contents of the `sidebars.yaml`.

**IMPORTANT**: The indentation spacing in the .yaml files is intentional.

```
gettingStarted:
  - group: Get Started
    expanded: true
    pages:
      - label: Overview ✅
        page: using-redocly/overview.md
      - separator: true
      - label: Top Nav
        page: using-redocly/top-navigation.md
      - label: Footer Nav
        page: using-redocly/footer-navigation.md
      - label: Sidebar Nav
        page: using-redocly/sidebar-nav.md
  - group: Data Exports Guide
    expanded: false
    pages:
      - group: Nested Group
        expanded: false
        pages:
          - separator: Another Separator
      - label: Quickstart
        page: using-redocly/quickstart.md
      - separator: Separator Example
      - label: Using Arguments
        page: using-redocly/arguments.md
      - label: Using Date Ranges
        page: using-redocly/date-range.md
      - separator: true
      - page: reference.page.yaml
anotherSidebar:
  - label: Sample
```

The `gettingStarted` is a key name and is not utilized by the web app for display purposes. If you decide to have multiple sidebars, then you'll need to use a different key name for each of them. In the example above, we added another key `anotherSidebar`.

The sidebars can then be composed of pages, separators, and groups. 

### Sidebar components

#### Groups

The groups can be composed of pages, labels, separators, and other (nested) groups.

A group can be expanded with a few possible configurations:

| Setting  | Description |
| ------------- | ------------- |
| `expanded: true`  | The pages will be open (expanded) when the page loads.  |
| `expanded: false`  |The pages will be collapsed when the page loads.  |
| `expanded: always` | The pages will be open (expanded) and cannot be collapsed. |



A group allows the nesting of pages, labels and separators.
While there are no theoretical limits on nesting, there are practical limits to keep the documentation easy to navigate for the users.
The sample below shows two groups nested:

```
  - group: Data Exports Guide
    expanded: false
    pages:
      - group: Nested Group
        expanded: false
        pages:
          - separator: Another Separator
```

#### Separators

A separator can have a string value and is represented in the left navigation pane with a slightly different style.

#### Labels

A label is a property that can optionally be used in conjunction with a page definition. By default, if a label is not specified in the `sidebars.yaml` file, the app will use the title from the corresponding page.

#### Pages

A page is a relative path to a file. Typically, it is a markdown (.md) file or markdown extension (.mdx) file. However, to reference an OpenAPI definition, it may be a path to a .yaml file. 

<!--
- More on referencing specific tags or operations later.
--> 


### Your API Reference

**Redocly Portal** provides the possibility to include the entire API reference (or parts of it) in the left navigation pane.

There are multiple options for doing that.

Here is a simple reference to a .yaml file defined like this in the sidebars:

```
      - page: reference.page.yaml
```

And this is what the `reference.page.yaml` file is composed of itself:

```
type: redoc
definitionId: petstore
tags: ['pet', 'user']
showInfo: true
expand: true
```

The configuration of that .yaml file influences how data is presented into the left sidebar navigation. 
For details, see [Integrating API reference](/using-redocly/redoc-integration/).
<!--
add link to the documentation
--> 
