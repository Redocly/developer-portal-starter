---
title: "Fast Salesforce Docs: Enabling Fast Checkout"
description: Getting Started with Fast on Salesforce Commerce Cloud.
keywords: SFCC enable fast checkout
---

# Install Step 2: Enable Fast Checkout on SFCC

The cartridge includes the necessary code for Fast buttons to appear and work on the following pages without requiring any changes:

- Simple Product Detail Page (PDP)
- Cart

:::info Requirement

Before proceeding with storefront configuration, ensure you have already [downloaded the Fast Cartridge for SFCC and uploaded it to your storefront](./acquire-extension.md).

:::

## Configuration

1. **Log in to your Commerce Cloud site** with your Business Manager credentials.
2. Activate the previously uploaded `int_fast_sfra` Cartridge to the site by adding it to your storefront's **Effective Cartridge Path**.
   - **Navigate to**: <br />
     Administration → Sites → Manage Sites → {site_id} → Settings
   - In the Settings tab, **add `int_fast_sfra` to the Effective Cartridge Path** (e.g. `int_fast_sfra:app_storefront_base`, as Cartridge names must be provided as a colon-separated list)
     ![cartridge path](./images/cartridge_path.png)
   - **Click "Apply"**
3. **Import Fast's metadata XML file** to enable custom attributes that support Fast payments.
   - **Navigate to**: <br />
     Administration → Site Development → Import & Export → Manage Import Files
     - Find the `system-objecttype-extensions.xml` under `/metadata/fast-meta-import/meta`
       > For reference, this is the location of the file in [Fast's SFCC Integration GitHub repository](https://github.com/fast-af/sfcc-integration/tree/master/sfcc_cartridge/metadata/fast-meta-import/meta).

:::info Proceed in Sandbox

Please limit changes to Sandbox configuration settings so that Fast can evaluate your Sandbox configuration before proceeding with changes that will affect your production storefront.

:::

4. **Connect to OCAPI**

   - **Navigate to**: <br />
     Administration → Site Development → Open Commerce API Settings
   - **Select Type**: Shop
   - **Select Context**: Global (organization-wide)
     ![Configuration Form](./images/ocapi-settings.png)
   - **Paste in the OCAPI configuration file** (provided in JSON format) provided to you by Fast
     > Be sure to update `"client_id":"<<client_id>>"` with the [Client ID you obtained prior to starting the installation process](../pre-install/requirements.md)

5. Open **Fast configuration** settings

   - **Navigate to**: <br/>
     Merchant Tools → Site Preferences → Custom Preferences.
   - **Click on Fast Configs**
     !["Configuration Link in the Admin panel](./images/image3.png)

6. **Enter your Fast configuration details**

   - Set **Instance Type**
     > During initial testing, set Instance Type to "Sandbox". Instance Type should only be changed to "Production" after Fast has evaluated your Sandbox setup and you are ready to go live with your changes
   - Set **FAST JS URL**
     > Sandbox: "https://js.sandbox.fast.co/fast.js" <br/>
     > Production: "https://js.fast.co/fast.js"
   - Set **Is Fast Enabled** option to “Enabled”
     > This is a store-level configuration setting that allows you to quickly enable or disable Fast.
   - Set **Fast App ID**
     > Enter the Sandbox App ID (`app_id`) provided to you previously by Fast
     > You will not obtain a production `app_id` until your Sandbox setup has been validated by Fast
   - Set **Fast Theme**
     > **ProTip**: Select dark theme if your site has a dark/black background.

   ![Configuration Form](./images/image4.png)

7. **Save Config**

8. **Implement Custom Code to Display the Fast Checkout Button**

   - **Add custom code (provided by Fast)** to your storefront's Base ISML files
     > The default storefront Cartridge is normally `app_storefront_base`
   - To **view the current versions of these ISML files**, **Navigate to**: <br />
     Administration → Site Development → Development Setup → {Code Version} → {Cartridge: `app_storefront_base`} → cartridge templates default
   - **Insert custom code in the following files at locations specified by Fast**:

| File                                                    | Custom Code Content                                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| cartridge/templates/default/common/layout/page.isml     | Include the `fast.js` file in the HTML Head of your storefront to enable Fast features |
| cartridge/templates/default/cart/cart.isml              | Include the Fast Checkout button on Cart Pages                                         |
| cartridge/templates/default/checkout/cart/miniCart.isml | Include the Fast Checkout button on Mini-Cart Pages                                    |
| cartridge/templates/default/product/productDetails.isml | Include the Fast Checkout button on Product Detail Pages                               |

![ISML custom code](./images/storefront-isml-custom-code.png)
