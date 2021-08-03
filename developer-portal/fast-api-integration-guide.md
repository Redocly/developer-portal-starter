# Fast API Integration Guide

> This product is in Early Access

Let's add the Fast Checkout button to your product page to power higher conversion. This guide assumes you have an existing eCommerce system and want to write code to integrate Fast into your website. See our other documentation sections for more detailed information on integrating Fast with BigCommerce, WooCommerce, and other platforms without needing to write code.

![Interacting with Fast Checkout](images/fast-api/overview.png)

## Set up Fast

You'll need a Fast account and sandbox credentials to start integrating.

[**Create a Fast Developer Account →**](https://http://sdash.sandbox.fast.co/)

🚨 Note: Your account will have separate credentials for testing and production use. The sandbox credentials are for your development and test environments and will allow you to try Fast using fake credit cards without any money moving. The separate production credentials should be used for real customers performing real transactions.

You can pick up onboarding anytime, if it's your first time doing this you'll likely need to pause at the "Install Fast Checkout" section of onboarding. We will pick up again in the later steps of this guide.

## Add fast.js to your page

Follow [fast.js install instructions](fast-api-fastjs)

## Handle order creation in your backend

Now we will set up your server to communicate with Fast Checkout.

While users interact with the Fast Checkout application, Fast will send requests to your server for processing.

![Handle order creation in the backend](images/fast-api/handle-order-creation.png)

As users add items, apply coupons, and submit orders, Fast will send these events and changes in data to your server for further processing. See the full specification [**here**](https://www.fast.co/docs/order/order/).

To start developing & testing your integration, you'll likely need to simulate some traffic to your machine. You can do this via our testing environment and developer tools.

#### Connecting to Fast Sandbox

If you haven't already, begin onboarding [**here**](https://sandbox.sdash.fast.co)

Complete the forms to complete your sandbox store onboarding. You will need to provide your the URL that your API is hosted at in the "**Install Fast Checkout**" section. Once you have registered your API and have a Fast credentials associated with your sandbox store, continue on to the next section.

#### Simulating test traffic

To see what data our system will send you in production for a given payload, you'll need the fast developer tools.

You can download the fast-cli developer tool here [**https://github.com/fast-af/fast-test-suite-cli**](https://github.com/fast-af/fast-test-suite-cli)

The repository has detailed instructions on dependencies and usage, once you have everything installed you can run this command to run through a test scenario:

```bash
./fast-test-suite login
./fast-test-suite pdp-simple-new-user --product-id=<product_id> --app-id=<app_id>
```

**NOTE:** You'll need to replace variables in the initial payload to match actual products that are registered in your system. We expect the seller to recognize the payload we pass. For full documentation on the possible options and full schema, see the [**reference documentation**](https://www.fast.co/docs/order/order/).

The `pdp-simple-new-user` command will emit a series of test requests from the Fast backend to yours, that has the same pattern of calls as it will in production. The `pdp-simple-new-user` test suite will run multiple operations.

[pdp existing user notes] we make one call for both 1&2, obvious to get shipping options back

1. CreateOrder in cart state with no user
2. Add shipping address to order
3. Get shipping options
4. Select shipping option
5. Configurable timer wait time
6. ConvertOrder

Here we will be able to validate that the responses you said are valid, and you will be able to see the exact call chain for several scenarios. To see all possible test scenarios, see the [**reference documentation**](https://www.fast.co/docs/order/order/)

The `pdp-simple-new-user` command will first emit a series of simulated creation, fetch, and update requests from our servers to yours.

The first request to create the order will hit the `/v1/create` endpoint on your server, with the shape:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "is_cart": true,
    "order": {
      "bill_to": {},
      "id": { "value": "00ad78ec-3cd6-413d-a3f5-6aea9d0b38f7" },
      "lines": [
        {
          "external_product_id": "113",
          "id": { "value": "deb39416-9517-4445-bf3e-07b9b09daadf" },
          "quantity": 1,
          "subtotal_amount": "0.00",
          "tax_amount": "0.00",
          "total_amount": "0.00"
        }
      ],
      "order_type": "ORDER_TYPE_CART",
      "status": "ORDER_STATUS_CART"
    }
  }
}
```

You can view a list of more example requests [here](https://github.com/fast-af/di-reference-implementation/blob/main/EXAMPLES.md)

Against each request that `pdp-simple-new-user` sends, the fast dev tools will validate the responses and return you a list of failures and successes as seen below.

```json
- InitialOrderCreation PASSED
- UpdateCartAddress    PASSED
- AddProfileAddress    PASSED
- AddPhoneNumber       PASSED
- AddPaymentMethod     PASSED
- BeginCheckout        FAILED
Status Code: 400 Bad Request
 Error Message: ...
```

For more information on what gets validated on these requests and responses, see the [**reference documentation**](https://www.fast.co/docs/order/order/).

Once your server can reply to these messages, Fast Checkout is able to construct a Checkout Session and collect all the information from the customer to complete the order.

## Testing your integration

Please visit [**https://sdash.sandbox.fast.co**](https://sdash.sandbox.fast.co) to resume your onboarding. If you have already done this in step #4, continue to run the full test suite.

#### Run the full test suite

Using the fast-cli execute the following command to run all various testing scenarios on your server in sandbox.

`./fast-test-suite pdp-simple-full-suite --product-id=<product_id> --app-id=<app_id>`

For full documentation on the list of test cases, see the [**reference documentation**](https://www.fast.co/docs/order/order/).

## Moving to production

Now that your integration is working in your development environment against the Fast Sandbox, you will need to make several changes to enable it to work for real customers. Firstly, you'll need to repeat the onboarding steps in [**production**](https://sdash.fast.co). Once you have completed that, you're all set!
