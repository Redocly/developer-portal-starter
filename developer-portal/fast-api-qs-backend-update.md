# Update Request

`POST /fast/v1/update`

1. *type: the type of entity being updated*
    - Possible values: `["ENTITY_TYPE_ORDER"]`
2. order*: FastOrderUpdateRequest data entity*
3. *request_id: idempotency key*
4. *app_id: store identifier within fast*

```json
{
	"type": string,	
	
	"order": FastOrderUpdateRequest,
	

	"request_id": string,
	"app_id": string
}
```

# Update Response

The update API is able to update several different top level components of the order. In the request we send to your server we will supply *only* the incremental data. If we send you data you should check that the item being updated/added is not being duplicated accidentally. We provide unique ids on each item.  
We also use the update endpoint to update the status of an order (i.e from a cart to an order, from pending to pending fulfillment, etc.)

**Example 1: Update existing item quantity**

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
				"id": "item_1", // pre existing item
				"quantity": 2, // quantity change respected
				"price": "54.02" // new price updated
			}
		],
	},
}
```

**Example 2: Update billing address associated with an order**

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
		"shipping_options": [ShippingOption],
	},
}
```

**Example 3: Add additional item to cart**

request:

```json
{
	"type": "ENTITY_TYPE_ORDER",
	"order": {
		"items": [
			{
				"id": "item_2" // newly added item
			}
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
				"id": "item_1",
				// ... other previously hydrated data
			},
			{
				"id": "item_2",
				"price": 32.04, // and other newly hydrated data
			},
		]
	}
}

```

**Example 4: Add coupon to cart**

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
				"id": "item_1",
				// ... other previously hydrated data
			},
			{
				"id": "item_2",
				"price": 32.04, // and other newly hydrated data
			},
		],
		"coupon": "COUPONCODE"
	}
}

```

**Example 5: Convert Cart to Order**

Once the checkout timer expires, you will receive an update to convert the cart object into an order.

request:

```json
{
	"type": "ENTITY_TYPE_ORDER",
	"order": {
		"convert_cart_to_order": true,
		"convert_mode": "CART_TO_ORDER_CONVERT_UPDATE_AND_CONVERT",
		"is_cart": true
	},
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

**Example 6: Update Order Status**

Once the checkout timer expires, you will receive an update to convert the cart object into an order.

request:

```json
{
	"type": "ENTITY_TYPE_ORDER",
	"order": {
		"status": "ORDER_STATUS_BOOKED"
	},
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