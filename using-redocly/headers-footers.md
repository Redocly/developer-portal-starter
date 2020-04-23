---
title: Set up headers and footers
---

# Headers and footers customization

This page describes how to set up the headers and footers in the `siteConfig.yaml` file.

---

### Headers

You can customize the headers (top web page navigation) in the `siteConfig.yaml` file using the `nav` key.

View a sample headers configuration below:
```
nav:

  - label: Home
    page: index.mdx
    
  - label: Redocly Portal
    page: using-redocly/introduction.md

  - label: External docs
    href: https://google.com

  - search: true
```
The result looks as follows:

<img style="float: left;" src="../images/header_view.png" alt="web page headers" width="200"/>

The website search is enabled by setting search to true:

```
nav:
  - search: true
```

You may place it anywhere within the `nav` (navigation) key values.

In the example above, it is placed in the end, so that is is shown to the right. Place it in the beginning for it to appear on the left.
```
nav:
  - search: true
  - label: Overview
    page: using-redocly/overview.md
```
### Footers ###

You can set up the footer navigation using the `siteConfig.yaml` file.

---
The footer navigation is shown in the bottom of your web page. As a rule, it contains the copyright, contact information, and so on.
Using the `footer` key in the `siteConfig.yaml` file, you can adjust footer settings. 

View a sample footers configuration below:
```
footer:
  copyrightText: Copyright © Redocly 2019. All right reserved.
  list:
    - label: ReactJS
      href: https://reactjs.org/
    - label: GatsbyJS
      href: https://www.gatsbyjs.org/
    - label: Redocly
      href: https://redoc.ly/
  columns:
    - group: Docs
      items:
        - label: Rebilly API Reference
          href: 'https://rebilly.github.io/RebillyAPI/'
        - label: Rebilly User API Reference
          href: 'https://rebilly.github.io/RebillyUserAPI/'
        - label: Rebilly Reports API Reference
          href: 'https://rebilly.github.io/RebillyReportsAPI/'
    - group: Support
      items:
        - label: FAQ
          page: faq.md
        - label: Questions
          page: contact.mdx
```
**General settings**

| Setting  | Description |
| ------------- | ------------- |
| **Copyright**  | Write its contents within the `copyrightText`. It will be shown as a copyright message.  |
| **List**  | A list of links that will be shown in the very bottom footer.  |
| **Columns** | The footer columns are shown above the copyright and footer list content. Each `group` will be one column. |
