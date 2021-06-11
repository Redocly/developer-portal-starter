# Internal financial values representation

To avoid floating point arithmetic issues and to provide for exactness in calculations across many currencies, Fast uses the [google.protobuf.Money](https://github.com/googleapis/googleapis/blob/master/google/type/money.proto) data schema internally to represent financial values. Fast internally uses no rounding in the backend, however our checkout UI does round values to (2,3,4) digits for display.

```json
Price: {
	Units: int64 // the whole portion of the total price
	Nanos: int32 // the partial value of the total price. represented as an integer * 10e9,
	CurrencyCode: string, // ISO 4217 currency code
}
```

# Public financial value representation

We convert our internal financial representation (with zero rounding) and send financial values as a string.
