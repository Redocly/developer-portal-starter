# Install Fast Login Examples

## Login for signin account page

![Login for signin account page](images/login/signin-account-page.png)

Cornerstone location: /templates/pages/auth/login.html

Insert after: `<h1 class="page-heading">{{lang 'login.heading' }}</h1>`

```
<!------ FAST CHECKOUT BUTTON START ----------->
{{#unless customer}}
     <div class="fast-wrapper-login"></div>
         <div class="fast-or-login">OR</div>
         <fast-login app_id="REPLACE-WITH-YOUR-APP-ID"></fast-login>
     
     <style></style>
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
     
      
{{/unless}}
‍
<!------ FAST CHECKOUT BUTTON END ----------->
```

## Login for create account page

![Login for create account page](images/login/create-account-page.png)

Cornerstone location: /templates/pages/auth/create-account.html

Insert after: `<h1 class="page-heading">{{lang 'create_account.heading' }}</h1>`

```
<!------ FAST CHECKOUT BUTTON START ----------->
{{#unless customer}}
 <div class="fast-wrapper-create-account"></div>
     <div class="fast-or-create-account">OR</div>
     <fast-login app_id="REPLACE-WITH-YOUR-APP-ID"></fast-login>
 
 <style></style>
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

{{/unless}}
<!------ FAST CHECKOUT BUTTON END ----------->
```

## Login button in the website footer

![Login button in the website footer](images/login/login-button-in-footer.png)

Cornerstone location: /templates/components/common/footer.html

Insert it inside one of the `<article> </article>` tags

```
<!------ FAST CHECKOUT BUTTON START ----------->
{{#unless customer}}
<div class="fast-footer"></div>
   <fast-login app_id="REPLACE-WITH-YOUR-APP-ID"></fast-login>

<style></style>
 
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

{{/unless}}
<!------ FAST CHECKOUT BUTTON END ----------->
```

## Other useful tips

Test Mode: Only show the buttons if the logged in user has First Name: "Fast", Last Name: "Testing"

Wrap each snippet with this:
```
{{#if customer.name '===' 'Fast Testing'}}

<snippet-code></snippet-code>

{{/if}}
```