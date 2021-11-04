---
title: Order Management
enableToc: true
redirectFrom:
  - /developer-portal/fast-api-qs-backend-extended-oms-intro/
  - /developer-portal/fast-api-qs-backend-extended-oms-cancel-order/
  - /developer-portal/fast-api-qs-backend-extended-oms-refund-order/
  - /developer-portal/fast-api-qs-backend-extended-oms-business-event/
---

# Orders

Fast gives you the ability to directly work with orders! The functionality described in this section is entirely optional.

## Canceling Orders

| REST VERB | API_URL                                                    |
| --------- | ---------------------------------------------------------- |
| POST      | https://sandbox.fast.co/fast/v1/external/orders/{order_id} |

Enables the seller to cancel the order in the event of fast<->seller system failures.

### Cancel Codes

```jsx
1: Buyer canceled
2: Entity not found
3: Unprocessable order
4: Insufficient Stock
5: Fraud check failed
6: Payment declined
```

## Refunding Orders

| REST VERB | API_URL                                                           |
| --------- | ----------------------------------------------------------------- |
| POST      | https://sandbox.fast.co/fast/v1/external/orders/{order_id}/refund |

Enables the seller to refund an order for several reasons.

## Business Eventing

| REST VERB | API_URL                                                                   |
| --------- | ------------------------------------------------------------------------- |
| POST      | https://sandbox.fast.co/fast/v1/external/orders/{order_id}/business_event |

This section covers several different types of events that a seller can signal to Fast.

### Event Types

| Type                                             | Description                    |
| ------------------------------------------------ | ------------------------------ |
| `"BUSINESS_EVENT_TYPE_FULFILLMENT"`              | Fulfillment event              |
| `"BUSINESS_EVENT_TYPE_CLEAR_TO_COLLECT_PAYMENT"` | Clear to collect payment event |
