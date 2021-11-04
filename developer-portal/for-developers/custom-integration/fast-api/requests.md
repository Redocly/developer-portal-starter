---
title: Backend Requests
enableToc: true
redirectFrom:
  - /developer-portal/fast-api-qs-backend-create/
  - /developer-portal/fast-api-qs-backend-read/
  - /developer-portal/fast-api-qs-backend-update/
  - /developer-portal/fast-api-qs-backend-delete/
---

# Backend Requests

Fast uses a non-standard, polymorphic API. As our product grows and changes, many new features will be added to the API. As such, we have built it in such a way that customer's may opt-in to new features with minimal friction.

| REST VERB | API_URL         | Link                                                                                           |
| --------- | --------------- | ---------------------------------------------------------------------------------------------- |
| POST      | /fast/v1/create | [Docs](/developer-portal/for-developers/custom-integration/fast-api/requests/#create-requests) |
| POST      | /fast/v1/read   | [Docs](/developer-portal/for-developers/custom-integration/fast-api/requests/#read-requests)   |
| POST      | /fast/v1/update | [Docs](/developer-portal/for-developers/custom-integration/fast-api/requests/#update-requests) |
| POST      | /fast/v1/delete | [Docs](/developer-portal/for-developers/custom-integration/fast-api/requests/#delete-requests) |

# Create Requests

## Structure

`POST /fast/v1/create`

```json
{
  "entity_type": string,
  "order": {
    "is_cart": boolean,
    "order": FastOrder
  },
  "request_id": string,
  "app_id": string
}
```

| Value       | Description                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| entity_type | The type of entity being created. ex: `["ENTITY_ORDER"]`                                   |
| order       | wrapper object for the order. metadata is kept in the top level outside of the inner order |
| is_cart     | boolean indicating if order is in cart phase                                               |
| request_id  | Idempotency key of request. ensure that your operations are idempotent against this field  |
| app_id      | Store identifier within Fast                                                               |

## Create Request Response

```jsx
{
	"order": FastOrder
}
```

| Value | Description           |
| ----- | --------------------- |
| order | FastOrder data entity |

## Read Requests

## Structure

`POST /fast/v1/read`

```json
{
  "entity_type": string,

  "order": {
    "is_cart": boolean,
    "order_id": string,
    "external_order_id": string
  },

  "app_id": string
}
```

| Value             | Description                                                                             |
| ----------------- | --------------------------------------------------------------------------------------- |
| entity_type       | the type of entity being read. ex: `["ENTITY_TYPE_ORDER", "ENTITY_TYPE_SHIPPING_ZONES]` |
| order             | FastOrder data entity                                                                   |
| is_cart           | boolean indicating if the order is in cart phase                                        |
| order_id          | uuid value string that is the fast unique identifier                                    |
| external_order_id | the seller or integrators order*id*                                                     |
| app_id            | store identifier within fast                                                            |

# Read Response

```json
{
  "order": FastOrder
}
```

| Value | Description           |
| ----- | --------------------- |
| order | FastOrder data entity |

## Update Requests

## Structure

`POST /fast/v1/update`

```json
{
  "type": string,

  "order": FastOrderUpdateRequest,

  "request_id": string,
  "app_id": string
}
```

| Value      | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| type       | The type of entity being updated. ex: `["ENTITY_TYPE_ORDER"]` |
| order      | FastOrderUpdateRequest data entity                            |
| request_id | Idempotency key                                               |
| app_id     | Store identifier within fast                                  |

# Update Response

**The update API is able to update several different top level components of the order.** In the request we send to your server we will supply _only_ the incremental data. If we send you data you should check that the item being updated/added is not being duplicated accidentally. We provide unique ids on each item.
We also use the update endpoint to update the status of an order (i.e from a cart to an order, from pending to pending fulfillment, etc.)

## Example 1: Update existing item quantity

request:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "items": [
      {
        "id": "item_1", // pre existing item
        "quantity": 2 // quantity change
      }
    ]
  }
}
```

response:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "items": [
      {
        "id": "item_1", // pre existing item
        "quantity": 2, // quantity change respected
        "price": "54.02" // new price updated
      }
    ]
  }
}
```

## Example 2: Update billing address associated with an order

request:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "bill_to": AddressUpdateEntity
  }
}
```

response:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "bill_to": Address,
    "shipping_options": [ShippingOption]
  }
}
```

## Example 3: Add additional item to cart

request:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "items": [
      {
        "id": "item_2" // newly added item
      }
    ]
  }
}
```

response:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "items": [
      {
        "id": "item_1"
        // ... other previously hydrated data
      },
      {
        "id": "item_2",
        "price": 32.04 // and other newly hydrated data
      }
    ]
  }
}
```

## Example 4: Add coupon to cart

request:

```json
{
	"type": "ENTITY_TYPE_ORDER",
	"order": {
		"items": [
			{
				"id": "item_2" // newly added item
			},
		"coupon": "COUPONCODE"
		],
	},
}
```

response:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "items": [
      {
        "id": "item_1"
        // ... other previously hydrated data
      },
      {
        "id": "item_2",
        "price": 32.04 // and other newly hydrated data
      }
    ],
    "coupon": "COUPONCODE"
  }
}
```

## Example 5: Convert Cart to Order

Once the checkout timer expires, you will receive an update to convert the cart object into an order.

request:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "convert_cart_to_order": true,
    "convert_mode": "CART_TO_ORDER_CONVERT_UPDATE_AND_CONVERT",
    "is_cart": true
  }
}
```

response:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    // ... full order object up to this point
  }
}
```

## Example 6: Update Order Status

Once the checkout timer expires, you will receive an update to convert the cart object into an order.

request:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    "status": "ORDER_STATUS_BOOKED"
  }
}
```

response:

```json
{
  "type": "ENTITY_TYPE_ORDER",
  "order": {
    // ... full order object up to this point
  }
}
```

## Delete Requests

## Structure

`POST /fast/v1/delete`

```json
{
	"entity_type": string,
	"order": FastOrderDeleteRequest
	"request_id": string,
}
```

| Value       | Description                                              |
| ----------- | -------------------------------------------------------- |
| entity_type | the type of entity being updated. ex: `["ENTITY_ORDER"]` |
| entity      | wrapper object for the request                           |
| order       | FastOrderDeleteRequest data entity                       |
| request_id  | idempotency key                                          |

# Delete Response

**The response to delete should be empty if no issues occurred**, or return one of the listed error code in the case something went wrong.

```json
{}
```
