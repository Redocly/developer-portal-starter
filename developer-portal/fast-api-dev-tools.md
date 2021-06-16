# Developer Tools

We have created a set of tools to help you get familiar with the flow of data between the Fast and Seller backends.

## Reference Implementation
The [reference implementation](../fast-api-reference-implementation) is a small app that represents a Seller integration with Fast. It implements all the endpoints that Fast calls, stores the Fast order, and has a small database catalog of products.  

## Test Suite CLI
The [Test Suite CLI](../fast-api-test-suite-cli) is used to simulate a frontend checkout by hitting Fast APIs directly.

#### Using CLI with Reference Implementation
You can use the CLI with the app id / api key from the reference implementation to mimic calls from Fast->Seller. This will enable you to see the different API requests/responses that the Seller backend will see from Fast.

#### Using CLI with Seller Sandbox App
You can also use the CLI with the app id / api key from your non-production Seller app. This will enable you to see the API requests/responses that will come directly into your backend.