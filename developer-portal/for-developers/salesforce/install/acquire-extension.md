---
title: "Fast Salesforce Docs: Acquiring Fast Extension"
description: Getting Started with Fast on Salesforce Commerce Cloud.
keywords: fast sfcc extension
---

# Install Step 1: Acquiring the Fast SFCC SFRA Cartridge

## Download the Cartridge

:::info AVAILABLE SOON:
The Fast Salesforce Reference Architecture (SFRA) Cartridge should be available via the [Commerce Cloud Partner Marketplace](https://www.salesforce.com/products/commerce-cloud/partner-marketplace/), which allows you to download the compressed Cartridge as a ZIP file.
:::

### Things you will need:

- Salesforce Commerce Cloud credentials to [access the Salesforce Commerce Cloud Github Organization](https://github.com/orgs/SalesforceCommerceCloud/sso/sign_up)
- An existing Github account (or [sign up for a new one](http://github.com/join))

### How to Find the Fast Cartridge

- [The Fast Cartridge Github repository](https://github.com/SalesforceCommerceCloud/link_fastcheckout) associated with the Marketplace version of the Fast Cartridge
- [Fast's SFCC Integration Github Repository](https://github.com/fast-af/sfcc-integration/) (e.g. for site admins who want to try development builds in Sandbox).
- A Fast team member can also provide the Cartridge as a ZIP file incorporating the [additional details you provided prior to starting the installation process](../pre-install/requirements.md).

## Upload the Cartridge to Your Storefront

Once you have the Cartridge downloaded, **you will need to upload it to your Storefront Reference Architecture (SFRA) storefront**.

This can be accomplished several ways, including the following 3 options:

**Upload Option 1**: Using the [SFRA command-line upload tool](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/sfra/b2c_adding_custom_cartridges.html)

> This method will require setting up a `dw.json` file to connect to your site

```json
{
  "hostname": "yoursandbox-inside-your-realm.demandware.net",
  "username": "YOUR_BUSINESS_MANAGER_USERNAME",
  "password": "YOUR_BUSINESS_MANAGER_PASSWORD",
  "code-version": "version1"
}
```

**Upload Option 2**: Using the [Prophet Debugger VS Code plugin](https://marketplace.visualstudio.com/items?itemName=SqrTT.prophet)

> this method also requires setting up a `dw.json` file to connect to your site

```json
{
  "hostname": "yoursandbox-inside-your-realm.demandware.net",
  "username": "YOUR_BUSINESS_MANAGER_USERNAME",
  "password": "YOUR_BUSINESS_MANAGER_PASSWORD",
  "code-version": "version1"
}
```

**Upload Option 3**: Using [Salesforce UX Studio (legacy software)](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/LegacyDevDoc/UploadCartridges.html)

- File > Import > General > Existing Projects into Workspace.

- Browse to the location of the compressed cartridge file

- Confirm subsequent prompts to finish the upload
