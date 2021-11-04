# Using Fast Checkout on AMP sites

_[AMP (Accelerated Mobile Pages)](https://amp.dev/) is a framework that is used by some blog or static sites with the
intention to increase page load time and responsiveness._

Due to the AMP's restrictions around loading custom JavaScript, DOM manipulation, and other things, it is not possible
to load fast.js on an AMP page. If you'd like to embed a Fast Checkout button on a page using AMP, the best way to do it
is to embed a CSS-only version of the Fast Checkout button that opens the checkout link for the product you want it to
purchase.

These steps will walk through placing a Fast Checkout button in your AMP page, as well as how to find the checkout URL
for a given product.

## Restrictions

:::info TODO
⚠️ There might be more detail that needs to be added here as we discover issues.
:::

The following must be true in order for you to use Fast Checkout inside of AMP:

- Your store must have Fast Catalog enabled. Currently it is enabled for BigCommerce and Custom Integration stores.

## Placing a Fast Checkout button on an AMP page

Due to AMP limitations, it's not possible to use the `<fast-checkout-button>` custom element on AMP pages. Instead, you
must create a Fast Checkout button using semantic HTML elements and custom styles.

In the `<head>` of your AMP document, insert a custom styles element. This is only needed once and will be used to style
all Fast Checkout buttons on the page:

```html
<style amp-custom>
  button.fast-checkout{width:400px;height:50px;border-radius:8px;font-weight:700;font-size:18px;background-color:#000;color:#fff;cursor:pointer;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;border:1px solid #000;outline-color:transparent}button.fast-checkout>div{margin-right:8px;width:15px;height:15px;position:relative;bottom:1px;background-size:contain;background-repeat:no-repeat;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMyAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4wODc0IDYuMTM1NzNIMTEuNDY5N0MxMS44OTE5IDYuMTUxNCAxMi4yODk5IDYuMzE1NjkgMTIuNTc2NSA2LjU5MjYxQzEyLjg2MzIgNi44Njk1MyAxMy4wMTUgNy4yMzY0OCAxMi45OTg4IDcuNjEzMDdWMTMuNTIyNkMxMy4wMTUgMTMuODk5MiAxMi44NjMyIDE0LjI2NjIgMTIuNTc2NiAxNC41NDMxQzEyLjI4OTkgMTQuODIgMTEuODkxOSAxNC45ODQzIDExLjQ2OTcgMTVIMS41MzAzMUMxLjEwODEgMTQuOTg0MyAwLjcxMDA3NiAxNC44MiAwLjQyMzQ1MSAxNC41NDMxQzAuMTM2ODI2IDE0LjI2NjIgLTAuMDE1MDI0MiAxMy44OTkyIDAuMDAxMTc0ODkgMTMuNTIyNlY3LjYxMzA3Qy0wLjAxNTAxMzggNy4yMzY0OSAwLjEzNjg0MSA2Ljg2OTUzIDAuNDIzNDY1IDYuNTkyNjJDMC43MTAwODkgNi4zMTU3IDEuMTA4MTEgNi4xNTE0MSAxLjUzMDMxIDYuMTM1NzNIMS45MTI1OVYzLjc0NzU1QzEuOTEyNTkgMi4zNzMzOCAyLjIzNjA4IDEuNTcyNzcgMi45NTU4MSAwLjkzMDc1MUMzLjY3NTUzIDAuMjg4NzM3IDQuNTcyNjQgMCA2LjExMjgyIDBINi44ODcxQzguNDI3MjggMCA5LjMyNDUgMC4yODg3MDMgMTAuMDQ0MiAwLjkzMDc1MUMxMC43NjM5IDEuNTcyOCAxMS4wODc0IDIuMzczMzggMTEuMDg3NCAzLjc0NzU1VjYuMTM1NzNaTTkuNTU4MjcgMy43NDgxM0M5LjU1ODI3IDIuODczNjcgOS4zNTIzMyAyLjM2NDIxIDguODk0NCAxLjk1NTY0QzguNDM2NDYgMS41NDcwNiA3Ljg2NTUyIDEuMzYzMzYgNi44ODUzNCAxLjM2MzM2SDYuMTE0ODFDNS4xMzQ2NyAxLjM2MzM2IDQuNTYzNjkgMS41NDcwNiA0LjEwNTc5IDEuOTU1NjRDMy42NDc5IDIuMzY0MjEgMy40NDE3MyAyLjg3MzY3IDMuNDQxNzMgMy43NDgxM1Y2LjEzNTczSDkuNTU4MjdWMy43NDgxM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=)}
</style>
```

Then, for each place you want to insert a Fast Checkout button, you can use the following snippet:

```html
<button
  on="tap:AMP.navigateTo(url='PRODUCT_CHECKOUT_URL', target='_blank', opener=true)"
  class="fast-checkout"
>
  <div></div>
  <span>Fast Checkout</span>
</button>
```

:::info heads up
🚨 The empty `<div>` and the "Fast Checkout" `<span>` are crucial for the button to be displayed properly. Make sure you copy the whole snippet!
:::

Notice that the snippet has a placeholder `PRODUCT_CHECKOUT_URL`. The next section will cover how to find this URL for
the product you want the button to purchase. Once you have the URL, you can replace `PRODUCT_CHECKOUT_URL` with it.

## Finding the checkout URL for a given product

Finding the checkout URL for a product involves replacing some URL parameters with information you should already have.
Start with the following string, and make the replacements detailed below:

```
https://go.fast.co/checkout?app_id=YOUR_APP_ID&version=1.2.0&product_id=YOUR_PRODUCT_ID
```

| Placeholder       | Replacement                                                   |
| ----------------- | ------------------------------------------------------------- |
| `YOUR_APP_ID`     | Your Fast app ID                                              |
| `YOUR_PRODUCT_ID` | The product ID of the product you want the button to purchase |

You do not need to modify the `version` parameter.

There are a few additional URL parameters you can include if you would like:

| URL Parameter                     | Placeholder         | Replacement                                        | Reason to use                                                                                           |
| --------------------------------- | ------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `&coupon_code=YOUR_COUPON_CODE`   | `YOUR_COUPON_CODE`  | A valid coupon code for the purchase               | Use this if you'd like every user of this button to have a coupon automatically applied to their order. |
| `&affiliate_id=YOUR_AFFILIATE_ID` | `YOUR_AFFILIATE_ID` | A unique identifier for an affiliate of your store | Use this if purchases through this button should be linked to an affiliate of your store.               |

As an example, here is a URL that would purchase a Fast Checkout sticker from the [Fast Store](https://store.fast.co/fast-checkout-sticker/) and link it to a `devdocs` affiliate.

```
https://go.fast.co/checkout?app_id=c8ea5b2d-c69f-4478-bc3c-0bdef63c9eae&version=1.2.0&product_id=180&affiliate_id=devdocs
```

Once you have built the checkout URL for the product, replace `PRODUCT_CHECKOUT_URL` in the HTML snippet above with the
URL you have put together. After that, you're good to go! The button can be used on the AMP page.
