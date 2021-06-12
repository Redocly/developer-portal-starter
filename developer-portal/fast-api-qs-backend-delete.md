# Delete Request

`POST /fast/v1/delete`

1. *entity_type: the type of entity being updated*
    - Possible values: `["ENTITY_ORDER"]`
2. *entity: wrapper object for the request*
    - *order: FastOrderDeleteRequest data entity*
3. *request_id: idempotency key*

```json
{
	"entity_type": string,
	"order": FastOrderDeleteRequest
	"request_id": string,
}
```

# Delete Response

The response to delete should be empty if no issues occurred, or return one of the listed error code in the case something went wrong.

```json
{}
```
