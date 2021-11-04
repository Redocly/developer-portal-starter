**To use Salesforce Commerce Cloud (SFCC) with Fast, you will need:**

- **Salesforce B2C Commerce Enterprise**.
- A SFCC eCommerce storefront **built using Commerce Cloud Storefront Reference Architecture (SFRA)**.
  > SFRA is necessary to leverage Fast's pre-built front-end integration, as Fast's SFCC front-end templates are built with SFRA version v6.0.0. Contact [seller-support@fast.co](mailto:seller-support@fast.co) if you are still using the legacy SiteGenesis (SG) storefront framework.
- Fast integration **built based on Open Commerce API (OCAPI) version 21.9**.

**In order to create a Fast App ID (`app_id`) for your Salesforce Commerce Cloud (SFCC) store, Fast requires the following details**:

- **Site URL**
- **Site ID** for the site being integrated
- Commerce Cloud **Business Manager credentials**, which include username and password.

  > It is helpful to create a common email for this (e.g. fast-integration-user@yourcompany.com): <br/>
  > In Business Manager, **Navigate to** Administration → Organization → Users and Create a New user

  :::info Updating Your Business Manager Password
  Please note that Salesforce requires updating the password for a Business Manager account every 90 days.
  :::

- **OCAPI (Salesforce Open Commerce API) URL** for the API client
- OCAPI **client ID** and **password**
  - If you don't already have an API Client set up, you can do so from [Salesforce B2C Account Manager](https://account.demandware.com/)
- **Host API URL** (where we will be sending API requests)

<br/>
For your convenience below is a summary of the required details in table form:

| Field                     | Description                                                   | Example                              |
| ------------------------- | ------------------------------------------------------------- | ------------------------------------ |
| Client ID                 | Client ID for OCAPI API Connection                            | 1c5ab7fa-746c-42f2-add9-8073858748fa |
| Client Password           | Client Password for OCAPI API Connection                      | P@ssword123                          |
| Business Manager Username | Username of Business Manager for store                        | business@fast.co                     |
| Business Manager Password | Password for Business Manager [must be rotated every 90 days] | P@ssword456                          |
| SiteID                    | The SiteID for your store on SFCC                             | fast-co-us                           |
| Website                   | The website of your store                                     | https://store.fast.co                |
| Host Server API URL       | SFCC OCAPI Server URL                                         | https://api.fast.co                  |
