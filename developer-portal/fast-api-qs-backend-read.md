# Read Request

`POST /fast/v1/read`

1. *entity_type: the type of entity being read*
    - possible values: `["ENTITY_TYPE_ORDER", "ENTITY_TYPE_SHIPPING_ZONES]`
2. *order: FastOrder data entity*
    - *is_cart: boolean indicating if the order is in cart phase*
    - *order_id: uuid value string that is the fast unique identifier*
    - *external_order_id: the seller or integrators order_id*
3. *app_id: store identifier within fast*

```json
{
	"entity_type": string,
	
	"order": {
		"is_cart": boolean,		
		"order_id": string,
		"external_order_id": string,
	},
	

	"app_id": string
}
```

# Read Response

1. order*: FastOrder data entity*

```json
{
	"order": FastOrder
}
```
