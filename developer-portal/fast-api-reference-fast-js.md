# fast.js Documentation

> This product is in Early Access

# Intro

Throughout the login/checkout flow, Fast.js dispatches events to the host page that can be used to watch for and perform certain actions with, such as sending relevant data to Google Analytics.

# Event object

Today, all events have a `name` field that denotes the type of event that fired (e.g. “Checkout - Order Created”), and some events have a `properties` field that contains special data relevant to the event that fired. For example, “Checkout - Order Created” events have the `order_id`, `order_items`, and `total` fields inside of their `properties` map.

# Event list 

These are all of the events that are currently supported, when they are sent, and what extra properties they contain.

**Event list will soon be available in our API reference docs. Please [subscribe to our product updates mailing list](https://fastdevs.substack.com/) to be notified when this content becomes available.**

# Sample event watching code

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

# Sending data to Google Analytics

This sample block will watch for Order Created events from Fast.js and send them to Google Analytics:

```jsx
var fast = new Fast();
fast.addEventListener("user_event", (event) => {
  if (event.name === "Checkout - Order Created") {
    gtag('event', 'purchase', {
        'send_to': 'INSERT GOOGLE ANALYTICS TRACKING ID HERE',
        'event_category': 'Fast Checkout',
        'event_label': 'Fast Checkout Label',
        'value':  event.properties.total.units + '.' + event.properties.total.nanos,
        'currency': event.properties.total.currency_code,
        'transaction_id': event.properties.order_id,
        'event_callback': function(id) {
            if (id === 'INSERT GOOGLE ANALYTICS TRACKING ID HERE') {
                setTimeout(function() {
                  window.location = "https://example.com/order-confirmation/";   
                }, 1000);
            }
        }
    });
  }
});
```
