---
title: "Fast Custom Integration Docs: Product Item Identification"
description: Many ecommerce stores have complex & detailed setups for their products. As a result, Fast's data model allows for any combination of unique identifiers. This is a representation of an item in Fast.
keywords: Fast checkout diagram

enableToc: true
redirectFrom:
  - /developer-portal/fast-api-reference-products/
---

# Product Item Identification

Many eCommerce stores have complex & detailed setups for their products. As a result, **Fast's data model allows for any combination of unique identifiers**. This is a representation of an item in Fast.

```json
Option: {
	option_id: string, // identifier for the option, used to indicate size or color
  option_value: string, // value for the option provided, i.e. small, medium, large, blue
}

Item: {
	external_id: string, // uniquely identifies an exact item, i.e. Small Navy Blue Hoodie
	external_product_id: string, // identifies a product, i.e. Hoodie
	external_variant_id: string, // can be used in combination with product_id to identify an exact item.
	external_product_options: []Option, // can be used in combination with product_id to identify an exact item.
}
```

**You will need to see how this schema will map to your representation of items in your system**. It is best to provide as much data as possible to the checkout window so that your system does less work to identify which product is being purchased.

# Unsupported product item types

1. Subscription products
2. THC products
3. Weapons

# Guidelines for item identification

Fast expects data for items to be injected into checkout, here are a couple guidelines for providing that data. It is recommended to approach each unique product / item set up in order. That is to say for Item A, if guideline #1 fits, you should use #1 and not #2.

1. **If the browser has the data to uniquely identify the item.**
   - Provide the unique identifier as the `external_item_id`
     > **Expectation**: Your backend should recognize this `external_item_id`
2. **If the product has no settings or modifiers the customer can pick.**
   - Provide the `external_product_id`
     > **Expectation**: Your backend should recognize the `external_product_id`
3. **If the product has settings/modifiers & a unique identifier for the exact product variant is present.**
   - Provide the `external_product_id`
   - Provide the unique identifier for the settings as the `external_variant_id`
     > **Expectation:** Your backend should be able to recognize the `external_product_id + external_variant_id` as a unique item
4. **If the product has settings/modifiers but a unique identifier for the exact product cannot be fetched from the browser.**
   - Provide the `external_product_id`
   - Provide the list of `external_product_options` in the specified format
     > **Expectation:** Given the `external_product_id` + its optional key/value pairs, your backend should be able to recognize the exact item that is being operated on.
