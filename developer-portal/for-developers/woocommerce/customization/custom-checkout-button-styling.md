---
title: "Fast WooCommerce Docs: Custom Button Styling"
description: Getting Started with Fast on WooCommerce! Quickstart
keywords: Fast WooCommerce Quickstart
---

## Button Style Variants

<embed src="/reusables/customization/_button-styles.md" />

## Fixing Button Styles

Sometimes our default button styles are overwritten by page styles and needs to be updated.

1. On your online store, **control-click/right-click the Fast button and click “Inspect”**.

![inspecting element on a fast button](images/woocommerce-install12.png)

2. In the code that appears (in the inspector), **click `<div class="fast-wrapper">` or one of the lines below that line**.

3. In the styling box below, **make adjustments to the width or font size or anything else you need to change**.
   > Keep adjusting until the Fast button and the other elements around it appears like one of our 3 button style variants.

![page html and css](images/woocommerce-install13.png)

4. Once you have the styles updated how the need to be, **go to the “Styles tab” on the WooCommerce page**.

![styles tab in your woocommerce dashboard](images/woocommerce-install14.png)

5. **Figure out which textbox in WooCommerce corresponds to the page you’re trying to adjust**.
   > For example, if you want to adjust styling on the product page, you’ll want to use the “Product page button styles” textbox. Similarly, if you want to adjust the styling on the mini cart page, you’ll want to use the “Mini cart widget button styles” textbox.

![styles in your woocommerce styles dashboard tab](images/woocommerce-install15.png)

6. **In the corresponding textbox, take the change you made directly on the online store and apply that change here**.

7. **Click “Save Changes”**.
8. **Go into your online store again to see if the Fast button now looks good**. You may have to refresh the page a few times before the new version of the Fast button appears. If you still want to make changes, repeat this process until the Fast button looks good.
