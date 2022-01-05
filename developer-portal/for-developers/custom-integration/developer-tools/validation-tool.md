<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 35%;
}
table th:nth-of-type(3) {
    width: 45%;
}
</style>

# Direct Integration Validator

The Direct Integration Validator tool helps Sellers validate the API endpoints required to set up Fast for their stores. This tool allows a Seller to make individual calls to Create/Read/Update endpoints (Delete endpoint support will be added in the near future).

## Prerequisites

### Docker

1. You will need Docker to run the containers. You can download the latest version of Docker [here](https://www.docker.com/products/docker-desktop).

### Seller Server

2. You will also need an HTTP server that can receive Fast API requests.

   - You will need to supply the server URL as `api_host` to the Direct Integration Validator tool

## How to Use

Below is a quick summary of the arguments that you can supply to the Direct Integration Validator Tool, though you should refer to the section for a particular flow for more details:

| Argument      | Description                                                                                                                               | Examples                                                                                                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api_host`    | The Seller HTTP Server URL that can receive Fast API Requests.<br>**Required for all flows.**                                             | `-api_host=api.example.com`                                                                                                                                                                                 |
| `operation`   | The flow to be run.<br>**Required for all flows.**                                                                                        | `-operation=create_cart`<br> `-operation=read_cart`<br> `-operation=update_bill_to`<br> `-operation=update_shipment_contact`<br> `-operation=update_shipping_option`<br> `-operation=convert_cart_to_order` |
| `product_id`  | The product ID of the product as it exists in the backend catalog.<br>**Required for New User Checkout and Create Cart flows.**           | `-product_id=128`                                                                                                                                                                                           |
| `external_id` | Unique identifier for an exact item (commonly an external order ID)<br>**Required for Read Cart flow.**                                   | `-external_id=a98a387e-02ec-41a8-a38e-e3ca5fb0548e`                                                                                                                                                         |
| `order_id`    | The Fast order ID.<br>**Required for Update Bill To, Update Shipment Contact, Update Shipping Options, and Convert Cart to Order flows.** | `-order_id=order-8cedeffd-5ade-4d4f-ab23-d0f9546c5e0b`                                                                                                                                                      |
| `logResponse` | Flag (boolean) that can be set to enable response logging for the Direct Integration Validator tool.                                      | `-logResponse=true`                                                                                                                                                                                         |

### End-to-End Flows

This tool can automatically run a full end-to-end flow for different checkout scenarios.

Currently we support the New User Checkout (`operation=new_user`) flow, where a new user signs up for Fast.

#### New User Checkout

:::info Product ID Required for New User Checkout Flow

Product ID (`product_id`) is required for running a New User Checkout (`operation=new_user`) flow, and the Product ID specified should map to a product that exists in the backend catalog.

:::

```shell
docker run public.ecr.aws/fastco/fast-developer-tools/direct-integration-validator:latest -api_host=<seller_server_url> -operation=new_user -product_id=<product_id>
```

### Manual Flows

This tool supports manually triggering the following workflow actions:

#### 1. Create Cart

:::info Product ID Required for Create Cart Flow

Product ID (`product_id`) is required when running a Create Cart (`operation=create_cart`) flow, and the Product ID specified should map to a product that exists in the backend catalog.

:::

```shell
docker run public.ecr.aws/fastco/fast-developer-tools/direct-integration-validator:latest -api_host=<seller_server_url> -operation=create_cart -product_id=<product_id>
```

#### 2. Read Cart

:::info External ID Required for Read Cart Flow

External ID (`external_id`) is required when running a Read Cart (`operation=read_cart`) flow. External ID can be found in the response of the Create Cart action. If you cannot find it in Seller Server, you can enable response logging in this tool by setting the `logResponse` flag to `true`.

:::

```shell
docker run public.ecr.aws/fastco/fast-developer-tools/direct-integration-validator:latest -api_host=<seller_server_url> -operation=read_cart -external_id=<external_id>
```

#### 3. Update Bill To

:::info Order ID Required for Update Bill To flow

Order ID (`order_id`) is required when running an Update Bill To (`operation=update_bill_to`) flow.

:::

```shell
docker run public.ecr.aws/fastco/fast-developer-tools/direct-integration-validator:latest -api_host=<seller_server_url> -operation=update_bill_to -order_id=<order_id>
```

#### 4. Update Shipment Contact

:::info Order ID Required for Update Shipment Contact flow

Order ID (`order_id`) is required when running an Update Shipment Contact (`operation=update_shipment_contact`) flow.

:::

```shell
docker run public.ecr.aws/fastco/fast-developer-tools/direct-integration-validator:latest -api_host=<seller_server_url> -operation=update_shipment_contact -order_id=<order_id>
```

#### 5. Update Shipping Option

:::info Order ID and Shipping Option ID Required for Update Shipping Option flow

Order ID (`order_id`) and Shipping Option ID (`shipping_option_id`) are required when running an Update Shipping Option (`operation=update_shipping_option`) flow.

:::

```shell
docker run public.ecr.aws/fastco/fast-developer-tools/direct-integration-validator:latest -api_host=<seller_server_url> -operation=update_shipping_option -order_id=<order_id> -shipping_option_id=<shipping_option_id>
```

#### 6. Convert Cart To Order

:::info Order ID Required for Convert Cart To Order

Order ID (`order_id`) is required when running a Convert Cart To Order (`operation=convert_cart_to_order`) flow.

:::

```shell
docker run public.ecr.aws/fastco/fast-developer-tools/direct-integration-validator:latest -api_host=<seller_server_url> -operation=convert_cart_to_order -order_id=<order_id>
```
