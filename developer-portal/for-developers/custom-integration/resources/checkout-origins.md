---
title: "Fast Custom Integration Docs: Types of Checkout Origins"
description: Getting Started with Fast with a Custom Integration!
keywords: Fast authentication

enableToc: true
redirectFrom:
  - /developer-portal/fast-api-reference-checkout-origin/
---

# Types of Checkout Origins

1. **Product page checkout (PDP)**
   - A checkout that occurs from a single product.
   - Can be batched with other PDP checkouts or Cart checkouts
2. **Cart checkout**
   - A checkout that occurs from an eCommerce cart
   - Can be batched with other Cart checkouts or PDP checkouts
3. **Re:order**
   - A checkout that occurs on a historical order from the Fast buyer dashboard (bDash).
   - Creates a new order with the source as `"re:order_checkout"`
   - Can be batched with other cart checkouts or pdp checkouts.
