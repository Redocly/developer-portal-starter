# Create Request

`POST /fast/v1/create`

1. *entity_type: the type of entity being created*
    - possible values: `["ENTITY_ORDER"]`
2. *order: wrapper object for the order. metadata is kept in the top level outside of the inner order*
    - *is_cart: boolean indicating if order is in cart phase*
3. *request_id:* *idempotency key of request. ensure that your operations are idempotent against this field*
4. *app_id: store identifier within fast*

```json
{
	"entity_type": string,
	"order": {
		"is_cart": boolean,
		"order": FastOrder,
	},
	"request_id": string,
	"app_id": string
}
```

# Create Response

1. *order: FastOrder data entity*

```jsx
{
	"order": FastOrder
}
```
