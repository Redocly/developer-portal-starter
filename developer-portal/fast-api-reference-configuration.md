# Configurable & Direct Capture

> *Configurable & Direct Capture: the ability to control payment capture timing via the API.*

To enable configurable capture, please engage with our support team here. If you are a seller that is registered to use configurable capture, Fast will expect you to make the capture call for orders processed through our system. This can be done by using the Capture API. 

When orders in Fast have been converted from a cart to an order, we perform risk & fraud checks to mitigate against chargebacks. After an order has passed all checks, we will send a `Update` request to your server with a field in `convert_cart_to_order: true`. This lets your server know that order's with this signal are ready for payment processing and fulfillment.

On the Capture API request, Fast servers will initiate payment capture on the order. Once payment has been collected successfully, we will change the order status to `AWAITING_FULFILLMENT`.
