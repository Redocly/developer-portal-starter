# Handle order creation in your backend

Now we will set up your server to communicate with Fast Checkout.

While users interact with the Fast Checkout application, Fast will send requests to your server for processing.

![Handle order creation in the backend](images/fast-api/handle-order-creation.png)

As users add items, apply coupons, and submit orders, Fast will send these events and changes in data to your server for further processing. See the full specification [**here**](https://www.fast.co/docs/order/order/).

To start developing & testing your integration, you'll likely need to simulate some traffic to your machine. You can do this via our testing environment and developer tools.

# Connecting to Fast Sandbox

If you haven't already, begin onboarding [**here**](https://sandbox.sdash.fast.co)

Complete the forms to complete your sandbox store onboarding. You will need to provide your the URL that your API is hosted at in the "**Install Fast Checkout**" section. Once you have registered your API and have a Fast credentials associated with your sandbox store, continue on to the next section.

# Implementation

Fast uses a non-standard, polymorphic API. As our product grows and changes, many new features will be added to the API. As such, we have built it in such a way that customer's may opt-in to new features with minimal friction.

| REST VERB | API_URL | Link |
| --------- | ------- | ------- |
| POST | /fast/v1/create | [Create Guide](/developer-portal/fast-api-qs-backend-create.md) |
| POST | /fast/v1/read | [Read Guide](/developer-portal/fast-api-qs-backend-read.md) | 
| POST | /fast/v1/update | [Update Guide](/developer-portal/fast-api-qs-backend-update.md) | 
| POST | /fast/v1/delete | [Delete Guide](/developer-portal/fast-api-qs-backend-delete.md) |








