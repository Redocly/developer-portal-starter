# Order & Checkout Reference Documentation

> This product is in Early Access

## Sample sequence diagram

This sequence diagram illustrates the sequence of API calls for a new user PDP flow with a seller configured for direct capture. See the *Configurable & Direct Capture [BETA]* section for more information on direct capture.

![Interacting with Fast Checkout](images/fast-api/sample-sequence-diagram.png)

# Key concepts for order processing

## Types of checkout origin

1. Product page checkout (PDP)
    - A checkout that occurs from a single product.
    - Can be batched with other PDP checkouts or Cart checkouts
2. Cart checkout
    - A checkout that occurs from an ecommerce cart
    - Can be batched with other Cart checkouts or PDP checkouts
3. Re:order 
    - A checkout that occurs on a historical order from the Fast buyer dashboard (bDash).
    - Creates a new order with the source as `"re:order_checkout"`
    - Can be batched with other cart checkouts or pdp checkouts.

## Order Batching

> *Order Batching: When 2 or more customer shopping carts are merged into one order*

In the Fast Checkout customer experience, users have 5 minutes to make changes to their order. During the time window, they are able to update items in the cart, cancel order, and other checkout related interactions. If the user closes the window and purchases another item on the same store during the 5 minute timer, their new purchase will be "batched" with the previous one. 

Today this works by piggybacking the new item into their active order. Most of this is handled invisibly to the seller. What it will look like in the server API calls is when an order is batched with a new purchase, the original order will get an update call with a new item. 

## Product Item Identification

Many ecommerce stores have complex & detailed setups for their products. As a result, Fast's data model allows for any combination of unique identifiers. This is a representation of an item in Fast.

```json
Option: {
	option_id: string, // identifier for the option, used to indicate size or color
  option_value: string, // value for the option provided, i.e. small, medium, large, blue
}

Item: {
	external_id: string, // uniquely identifies an exact item, i.e. Small Navy Blue Hoodie
	external_product_id: string, // identifies a product, i.e. Hoodie
	external_variant_id: string, // can be used in combination with product_id to identify an exact item.
	external_product_options: []Option, // can be used in combination with product_id to identify an exact item.
}
```

You will need to see how this schema will map to your representation of items in your system. It is best to provide as much data as possible to the checkout window so that your system does less work to identify which product is being purchased.

### Unsupported product item types

1. Subscription products
2. THC products
3. Weapons

### **Guidelines for item identification**

Fast expects data for items to be injected into checkout, here are a couple guidelines for providing that data. It is recommended to approach each unique product / item set up in order. That is to say for Item A, if guideline #1 fits, you should use #1 and not #2.

1. If the browser has the data to uniquely identify the item
    - Provide the unique identifier as the `external_item_id`
    - **Expectation**: Your backend should recognize this `external_item_id`
2. If the product has no settings or modifiers the customer can pick
    - Provide the `external_product_id`
    - **Expectation**: Your backend should recognize the `external_product_id`
3. If the product has settings/modifiers & a unique identifier for the exact product variant is present
    - Provide the `external_product_id`
    - Provide the unique identifier for the settings as the `external_variant_id`
    - **Expectation:** Your backend should be able to recognize the `external_product_id + external_variant_id` as a unique item
4. If the product has settings/modifiers but a unique identifier for the exact product cannot be fetched from the browser
    - Provide the `external_product_id`
    - Provide the list of `external_product_options` in the specified format
    - **Expectation:** Given the `external_product_id` + its optional key/value pairs, your backend should be able to recognize the exact item that is being operated on.

## Internal financial values representation

To avoid floating point arithmetic issues and to provide for exactness in calculations across many currencies, Fast uses the [google.protobuf.Money](https://github.com/googleapis/googleapis/blob/master/google/type/money.proto) data schema internally to represent financial values. Fast internally uses no rounding in the backend, however our checkout UI does round values to (2,3,4) digits for display.

```json
Price: {
	Units: int64 // the whole portion of the total price
	Nanos: int32 // the partial value of the total price. represented as an integer * 10e9,
	CurrencyCode: string, // ISO 4217 currency code
}
```

## Public financial value representation

We convert our internal financial representation (with zero rounding) and send financial values as a string.

## Fast Order lifecycle

![Interacting with Fast Checkout](images/fast-api/order-lifecycle.png)

## Configurable & Direct Capture [BETA]

> *Configurable & Direct Capture: the ability to control payment capture timing via the API.*

To enable configurable capture, please engage with our support team here. If you are a seller that is registered to use configurable capture, Fast will expect you to make the capture call for orders processed through our system. This can be done by using the Capture API. 

When orders in Fast have been converted from a cart to an order, we perform risk & fraud checks to mitigate against chargebacks. After an order has passed all checks, we will send a `Update` request to your server with a field in `convert_cart_to_order: true`. This lets your server know that order's with this signal are ready for payment processing and fulfillment.

On the Capture API request, Fast servers will initiate payment capture on the order. Once payment has been collected successfully, we will change the order status to `AWAITING_FULFILLMENT`.

# API Spec

### Why POST for everything? Why not GET?

This was a conscious decision made to allow for polymorphic endpoints and enable ease of integrating new features in the future. As Fast scales and enables more features for your customers, these features will simply be integrated as additional, backwards-compatible data (opt-in) features rather than setting up new endpoints in your infrastructure.

## Error Codes

Fast uses the standard well known error codes for many behaviors.

```json
401: Unauthorized
404: Not Found
422: UnprocessableEntity
500: Unknown Server Error
503: Unavailable
```
