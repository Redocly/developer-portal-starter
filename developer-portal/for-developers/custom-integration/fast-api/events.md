---
title: "fast.js Events"
enableToc: true
redirectFrom:
  - /developer-portal/fast-api-reference-fast-js/
---

# fast.js Events

Throughout the login/checkout flow, fast.js dispatches events to the host page that can be used to watch for and perform certain actions with, such as sending relevant data to Google Analytics.

## Event Object

Today, all events have a `name` field that denotes the type of event that fired (e.g. “Checkout - Order Created”), and some events have a `properties` field that contains special data relevant to the event that fired. For example, “Checkout - Order Created” events have the `order_id`, `order_items`, and `total` fields inside of their `properties` map.

:::attention additional checks for events
All event properties have the potential to be undefined. You will need to check for undefined properties and values.
:::

## Event List

| Event                            | Description                                                             |
| -------------------------------- | ----------------------------------------------------------------------- |
| `Buy Now - Button Clicked`       | Emitted when the "Fast Checkout" button is clicked on the product page. |
| `Checkout Cart - Button Clicked` | Emitted when the "Fast Checkout" button is clicked on the cart page.    |

The above events emit:

```json
{
  "cart_id": "string",
  "item_ids": [
    {
      "platform_item_id": { "value": "string", "platform": "string" },
      "platform_variant_id": { "value": "string", "platform": "string" },
      "platform_product_id": { "value": "string", "platform": "string" },
      "platform_sku": { "value": "string", "platform": "string" },
      "quantity": "string",
      "platform_name": "string",
      "option_values": [
        {
          "option_id": { "value": "string" },
          "option_value": { "value": "string" }
        }
      ]
    }
  ]
}
```

---

| Event                        | Description                                                                                                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Checkout - Order Created`   | Emitted when the order has been submitted through Fast Checkout.                                                                                           |
| `Checkout - Order Updated`   | Emitted when the order has changed while inside the Fast Checkout window.                                                                                  |
| `Checkout - Order Completed` | Emitted when the order has finalized while inside the Fast Checkout window. This occurs when the timer window reaches zero naturally or is ended manually. |
| `Checkout - Order Cancelled` | Emitted when the order has been canceled from inside the Fast Checkout window.                                                                             |
| `Checkout - Existing User`   | Emitted when an order is created by a Shopper who is already signed up to Fast or has an active order.                                                     |
| `Checkout - Item Cancelled`  | Emitted when a Shopper selects to re-buy something but then decides not to after we ask if they are sure.                                                  |

The above events emit:

```json
{
  "ecommerce": {
    "purchase": {
      "actionField": {
        "id": "string",
        "affiliation": "string",
        "revenue": "string",
        "tax": "string",
        "shipping": "string",
        "country_code": "string",
        "coupon": ["string"],
        "checkout_time": "string"
      },
      "products": [
        {
          "name": "string",
          "id": "string",
          "price": "string",
          "country_code": "string",
          "quantity": "string",
          "coupon": "string",
          "brand": "string",
          "category": "string",
          "variant": "string"
        }
      ]
    }
  }
}
```

---

| Event                      | Description                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Checkout - Existing User` | Emitted when an order is created by a Shopper who is already signed up to Fast or has an active order. |
| `Popup window closed`      | Emitted when the Fast Checkout window is closed.                                                       |

The above events emit no extra information.

:::attention 🚨 events usage
These events are useful if you wish to forward data to your analytics provider, or if you want to do things like redirect to an order complete page after the user has finished their order and closed the Fast window. However, in some environments (e.g. embedded browsers inside of mobile apps), the Fast Checkout window may open in a separate browser and not be able to communicate these events back to your page. You should not rely on these events for mission-critical analytics and should always provide another way for Shoppers to see that their purchase is complete.
:::

## Sample Event Watching Code

Events can be monitored by adding an event listener to the `Fast` object, like so:

```jsx
var fast = new Fast();
fast.addEventListener("user_event", (event) => {
  console.log(`fast.js got a user_event of type:${event.name}!`);
  console.log(event);

  // Handle events here
});
```

In the `// Handle events here` block, you can do whatever you need with the event that has fired.

## Sending Data to Google Analytics

This sample block will watch for Order Created events from fast.js and send them to Google Analytics:

```jsx
var fast = new Fast();
fast.addEventListener("user_event", (event) => {
  if (event.name === "Checkout - Order Created") {
    gtag("event", "purchase", {
      send_to: "INSERT GOOGLE ANALYTICS TRACKING ID HERE",
      event_category: "Fast Checkout",
      event_label: "Fast Checkout Label",
      value: event.properties.total.units + "." + event.properties.total.nanos,
      currency: event.properties.total.currency_code,
      transaction_id: event.properties.order_id,
      event_callback: function (id) {
        if (id === "INSERT GOOGLE ANALYTICS TRACKING ID HERE") {
          setTimeout(function () {
            window.location = "https://example.com/order-confirmation/";
          }, 1000);
        }
      },
    });
  }
});
```
