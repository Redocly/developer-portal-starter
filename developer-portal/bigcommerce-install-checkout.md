# Fast Checkout for BigCommerce Installation Guide
Ready to get Fast? Here’s how to quickly install Fast Checkout for your BigCommerce store. It’s easy, with no custom integration required.

## Become a Seller

Make sure that you've completed your seller signup until you reach the section [**Follow technical integration steps**](/developer-portal/seller-signup/#follow-technical-integration-steps). If you've done these steps already, you're ready to move forward.

[![Get Started as a Seller](https://www.dropbox.com/s/wkgzvje5ox4lekb/01-get-started.png?raw=1)](https://www.fast.co/business)

## Choose BigCommerce
Continue with BigCommerce, or continue here if your website is hosted elsewhere.

[![Choose BigCommerce](images/bigcommerce/choose-bigcommerce.png)](images/bigcommerce/choose-bigcommerce.png)

## Get the Fast BigCommerce app
Select BigCommerce as your platform. If your site is hosted elsewhere, follow these instructions instead.

[![Choose BigCommerce](images/bigcommerce/install-fast-bigcommerce-app.png)](images/bigcommerce/install-fast-bigcommerce-app.png)

## Install the button

Use this snippet in your code to install the Fast Checkout button.

```html
<fast-checkout-button app_id="{{app_id}}" />
```

### Legacy theme templates (Blueprint):
1. You must include the following script tag in the HTMLHead.html file
    ```
    <script src="https://js.fast.co/fast-bigcommerce.js"></script>
    ```
2. AND remove `cart_id="{{cart_id}}"` from the Fast Checkout button scripts

*Do not to do these two steps if you have a Cornerstone themed template.*

  
[**See Examples →**](/developer-portal/bigcommerce-install-checkout-examples)

## Complete your business details

[**Return to Seller Signup documentation →**](/developer-portal/seller-signup/#return-to-fast-seller-account-dashboard) to complete your seller profile.

