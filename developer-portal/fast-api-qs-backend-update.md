# Update Request

`POST /fast/v1/update`

1. *entity_type: the type of entity being updated*
    - Possible values: `["ENTITY_ORDER"]`
2. order*: FastOrderUpdateRequest data entity*
3. *request_id: idempotency key*
4. *app_id: store identifier within fast*

```json
{
	"entity_type": string,	
	
	"order": FastOrderUpdateRequest,
	

	"request_id": string,
	"app_id": string
}
```

# Update Response

The update API is able to update several different top level components of the order. In the request we send to your server we will supply *only* the incremental data. If we send you data you should check that the item being updated/added is not being duplicated accidentally. We provide unique ids on each item.

**Example 1: Update existing item quantity**

request:

response:

```json
{
	"entity_type": "ENTITY_ORDER",
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

```json
{
	"entity_type": "ENTITY_ORDER",
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
	"entity_type": "ENTITY_ORDER",
	"order": {
		"bill_to": AddressUpdateEntity
	}
}
```

response:

```json
{
	"entity_type": "ENTITY_ORDER",
	"order": {
		"bill_to": Address,
		"shipping_options": [ShippingOption],
	},
}
```

**Example 3: Add additional item to cart**

request:

response:

```json
{
	"entity_type": "ENTITY_ORDER",
	"order": {
		"items": [
			{
				"id": "item_2" // newly added item
			}
		],
	},
}
```

```json
{
	"entity_type": "ENTITY_ORDER",
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

response:

```json
{
	"entity_type": "ENTITY_ORDER",
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

```json
{
	"entity_type": "ENTITY_ORDER",
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
