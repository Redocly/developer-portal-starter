---
title: "Fast Magento Docs: Fulfillments"
description: Getting Started with Fast on Magento! Enable Fulfillment for Fast Orders
keywords: Magento enable fast checkout
---

# Fulfillment for Fast Orders

This section covers the fulfillment and payment capture process for Fast orders created in your storefront.

## Default Settings

**By default, the Fast module will send fulfillment events to Fast based on your normal order cycle process**, assuming that you rely on updating Magento orders for order status or invoice creation.

- Shipments
- Order cancellations
- Payment Captures
- Refunds

## New Orders

**New Orders from Fast will be created in Magento when the batching window (typically 5 minutes) has completed and the order has passed Fast’s fraud review**. Fast will either authorize funds for the amount of the order on the customer’s card, or authorize and capture, depending on what is configured in your Fast Seller account.

These orders will be labeled with Fast as a payment method, so that you can identify them as needed for fulfillment or reporting.

## Invoices

**New orders will be created with the default order status matching the regular checkout flow**. When invoices are created (including for stores that capture payment up front), the order status will change to what is listed under Store Configuration -> Services -> Fast in the “Order Status Invoice Paid” dropdown menu.

## Shipped Orders

**When orders are marked as shipped in Magento, the module will update Fast so that the orders show as shipped in Customer’s Fast accounts**. If your store is not set to capture immediately, Fast will capture funds at this point.

## Refunds

When Refunds are applied to an order via credit memos in Magento, either as part of a return flow or for other reasons, **Magento will update Fast so that the credits are returned to the customer’s original payment method**.
