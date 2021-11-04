---
title: "Fast BigCommerce Docs: Fast Login Install Examples"
description: BigCommerce Fast Login Install Examples
keywords: BigCommerce Fast Login Install Examples
exclude: true
---

# Fast Login Install Examples

## Getting Started

To install the Fast Login buttons to your BigCommerce site, you will need to add each button's code snippet directly to
your current theme's source code. To access your theme's source code, you will complete the following:

1. Log into to your BigCommerce store account
2. Click on **Storefront**
3. In your **My Themes** page, you will see your _Current Theme_
4. Click on the **Advanced** dropdown menu
5. Click on **Edit Theme Files**
   - If you do not see the **Edit Theme Files** option, then you will need to make a copy of your current theme and
     then set the newly copied version as your current theme. Once you do this, then you will see the option to **Edit Theme Files**.
6. This will open **Stencil Editor**, which is where you can edit your theme's source code and where you will add the Fast Login code snippets.

**For all of the Fast Login code snippets below, you will need to replace the section _REPLACE-WITH-YOUR-APP-ID_ with
your own Fast App Id. Make sure it's wrapped in quotes. You can get this from your [**Seller Dashboard →**](https://www.fast.co/business/dash/profile)**

## Fast Login Buttons to Install

### 1. Login Page Button

![Login for signin account page](images/fast-login/signin-account-page.png)

Cornerstone theme location: `/templates/pages/auth/login.html`

- Insert the Fast Login code snippet right below: `<h1 class="page-heading">{{lang 'login.heading' }}</h1>`

Blueprint theme location: `login.html`

- For Blueprint theme only, remove `{{#unless customer}} and {{/unless}}` from the Fast Login script

```
<!------ FAST LOGIN BUTTON START ----------->
{{#unless customer}}
<div class="fast-wrapper-login">
    <div class="fast-or-login">OR</div>
    <fast-login app_id="REPLACE-WITH-YOUR-APP-ID" />
</div>
<style>
    .fast-wrapper-login {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        border-bottom: 1px solid #dfdfdf;
        padding-bottom: 40px;
        margin-bottom: 20px;
        padding-top: 20px;
    }
    .fast-or-login {
        position: relative;
        top: 100px;
        background: white;
        width: 40px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: #757575;
    }
    @media (min-width: 551px) {
        .fast-wrapper-login {
            padding-left: 30%;
            padding-right: 30%;
            border: 1px solid #dfdfdf;
            border-radius: 5px;
        }
    }
</style>
{{/unless}}
<!------ FAST LOGIN BUTTON END ----------->
```

### 2. Create Account Page Button

![Login for create account page](images/fast-login/create-account-page.png)

Cornerstone theme location: `/templates/pages/auth/create-account.html`

- Insert the Fast Login code snippet right below: `<h1 class="page-heading">{{lang 'create_account.heading' }}</h1>`

Blueprint theme location: `createaccount.html`

- For Blueprint theme only, remove `{{#unless customer}} and {{/unless}}` from the Fast Login script

```
<!------ FAST LOGIN BUTTON START ----------->
{{#unless customer}}
<div class="fast-wrapper-create-account">
    <div class="fast-or-create-account">OR</div>
    <fast-login app_id="REPLACE-WITH-YOUR-APP-ID" />
</div>
<style>
    .fast-wrapper-create-account {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        border-bottom: 1px solid #dfdfdf;
        padding-bottom: 40px;
        margin-bottom: 20px;
        padding-top: 20px;
    }
    .fast-or-create-account {
        position: relative;
        top: 100px;
        background: white;
        width: 40px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: #757575;
    }
    @media (min-width: 551px) {
          .fast-wrapper-create-account {
              padding-left: 30%;
              padding-right: 30%;
              border: 1px solid #dfdfdf;
              border-radius: 5px;
          }
      }
</style>
{{/unless}}
<!------ FAST LOGIN BUTTON END ----------->
```

### 3. Footer Button

![Login button in the website footer](images/fast-login/login-button-in-footer.png)

Cornerstone theme location: `/templates/components/common/footer.html`

- Insert the Fast Login code snippet between one of the `<article> </article>` tags

```
<!------ FAST LOGIN BUTTON START ----------->
{{#unless customer}}
<div class="fast-footer">
    <fast-login app_id="REPLACE-WITH-YOUR-APP-ID" />
</div>
<style>
    .fast-footer {
      width: 100%;
      padding-bottom: 20px;
      border-radius: 5px;
      padding-top: 20px;
      border:none;
      margin-top: 20px;
    }
    @media (min-width: 551px) {
        .fast-footer {
            padding-left: 30%;
            padding-right: 30%;
            border: 1px solid #323232;
        }
    }
</style>
{{/unless}}
<!------ FAST LOGIN BUTTON END ----------->
```
