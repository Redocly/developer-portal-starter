## Add Fast.js to your page

On your product page, load the `fast.js` script:
  
Production:  
```jsx
<script src="https://js.fast.co/fast.js"></script>
```
  
Sandbox:  
```jsx
<script src="https://js.sandbox.fast.co/fast.js"></script>
```

## Use the Fast Checkout button

### Render the button on your page

Decide where you want the button to appear on your product page and add a container for it:

```html
<fast-checkout-button></fast-checkout-button>
```

### Open Fast Checkout when the button is clicked

When the button is clicked, use Fast.js to place an order for the item. Make sure to include any product-specific options:

```jsx
// If you have multiple fast-checkout-button elements on a single page, you'll want to use a more specific selector
// here, such as giving each button an id attribute and selecting based off of that.
var checkoutButton = document.querySelector('fast-checkout-button');
checkoutButton.addEventListener('click', (event) => {
    Fast.checkout(
    {
            // Required. appId is your Fast app ID that you were provided during seller onboarding.
            appId: 'my-fast-app-id',

      // Required. buttonId is the id attribute of the button that was clicked
      // after an order was placed or canceled, as well as let you identify which button was clicked when listening for
      // postMessage events.
      // If you gave your fast-checkout-button an id attribute, then you can just use event.target.id here.
      buttonId: event.target.id,

      // Either cartId or products must be provided. If both or neither are provided, an error will be thrown before
      // checkout is opened.

            // When performing a cart checkout, you only need to provide buttonId and cartId.
      // cartId is a unique identifier for a user's cart.
      cartId: 'my-unique-cart-id',

            // When performing a products checkout, you only need to provide buttonId and products. You can also optionally
            // provide couponCode and affiliateInfo
      // products is a list of products the user is ordering.
      products: [
        {
          // Each product has an identifier, a variant identifier, and, optionally, a set of configurations (called
                    // options) that are used to describe the exact product being ordered.
          // You can think of the id as the product SKU, the variant ID as a sub-identifier to the product, and the
                    // options as things like color, size, etc. Or, if your product identifiers already define exactly one
                    // product, you can just use id and forgo providing options.
          // The data provided here is what will reach your backend, so describe your products however makes the most
          // sense to you.
          // Required. id is an identifier for the product being ordered
          id: 'my-product-id',
                    // Optional. variantId represents a unique sub-idenfifier for this product. These are sometimes used to
                    // denote size / color, etc.
                    variantId: 'my-large-product-variant-id',
          // Optional. options is a set of configurations that further describe the product being ordered (e.g. color
          // and size).
          options: [
            {
              // Required. id is the name of the option.
              id: 'color',
              // Required. value is the value of the option.
              value: 'blue',
            }
          ],
          // Required. quantity is the number of this product with these configurations being ordered.
          quantity: 1,
        }
      ],
          // Optional. couponCode is a coupon that the user might have entered that you would like to pass on to your
      // backend.
      couponCode: '10OFF',
            // Optional. affiliateInfo contains information about affiliates that you would like to attribute this purchase
            // with on your backend.
            affiliateInfo: {
                // affiliateInfo contains a single field named affiliates, that is an array of affiliate objects.
                affiliates: [
                    // An affiliate object contains a single field named id, which is a unique identifier associated with this
                    // affiliate. This ID can be whatever string your system is prepared to interpret.
                    id: 'my-affiliate'
                ]
            }
    }
  );
});
```
🚨 It is important that you call `fast.checkout` synchronously within the `click` event handler. Many browsers will block new windows like Fast Checkout unless they are clearly connected to a user action such as clicking a button. If you perform asynchronous logic that takes several seconds, or call checkout in code in a different frame or window, the browser will prevent Fast Checkout from opening.

### Handle events from Fast Checkout

Once the user has clicked the Fast Checkout button, the Fast popup window will have launched and the user can continue with their checkout. While this is going on, you can listen for Fast.js `postMessage` events (link coming soon for Events list) if you want to keep up with the status of the order on your frontend.

This is useful if you wish to forward data to your analytics provider, or if you want to do things like redirect to an order complete page after the user has finished their order and closed the Fast window.

```jsx
// You can add an event listener for user_events onto your fast object to listen for any Fast-related events.
fast.addEventListener('user_event', (event) => {
  console.log(`Got a user_event of type: ${event.name}`);
  console.log(event);

  // For example, when the user clicks the "Keep shopping" button after finalizing their order, you could redirect to an
  // order confirmation page
  if (event.name === 'Checkout - Order Completed') {
    window.location = 'https://example.com/order-completed';
  }
});
```

🚨 In some environments, such as the embedded browsers inside of mobile apps, the Fast Checkout window will open in a separate browser and not be able to communicate these events back to your page. You should not rely on these events for mission-critical analytics and should always provide another way for buyers to see that their purchase is complete.
