# Fast Order Statuses
| Status Name | Description |
| -- | -- | 
| `ORDER_STATUS_UNSPECIFIED` | The status of the order is unspecified. | Likely something has gone wrong. |
| `ORDER_STATUS_CART` | Order and Cart share the same data model, this status means that Order is in Cart status this status will be populated on all Fast Carts. |
| `ORDER_STATUS_PENDING` | The timer has expired and the cart has been converted to an order, it is pending payment. |  
| `ORDER_STATUS_HOLD` | The order is on hold before it will be processed. |  
| `ORDER_STATUS_BOOKED` | The order is pending payment and fraud checks. |  
| `ORDER_STATUS_PENDING_FULFILLMENT` | Payment has been completed and the order is now pending fulfillment. | This status is sign that the items are ready to be shipped. |  
| `ORDER_STATUS_FULFILLED` | When Fast receives confirmation from the Seller that the shipping is complete, this status will be populated. |  
| `ORDER_STATUS_COMPLETE` | When there are no pending tasks related to this order it is marked as complete. |  
| `ORDER_STATUS_CANCELED` | The user cancels the order or the cart is abadoned. |  
| `ORDER_STATUS_DELETED` | Fast has deleted this order. |  
