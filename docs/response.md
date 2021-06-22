---
sidebar_position: 2
---

# Response

By creating a GET request to your product url, you will get a JSON object in the response.

## Example

```json
{
  "productId": "test",
  "storeId": "my_store",
  "url": "https://my_store.myconfig.store/api/v1/test",
  "createdAt": "Tue, 22 Jun 2021 08:43:55 GMT",
  "updatedAt": "Tue, 22 Jun 2021 08:46:43 GMT",
  "data": {
    "app_version": "v4.0.3",
    "app_name": "My Config Store"
  }
}
```

## Product Entity

The Product entity consists of the following fields:

| Key       | Data Type | Description                                           |
| --------- | --------- | ----------------------------------------------------- |
| productId | `string`  | The name/id of the product                            |
| storeId   | `string`  | The name/id of the product                            |
| url       | `string`  | The url of this product                               |
| createdAt | `string`  | The date when the product was first created           |
| updatedAt | `string`  | The date when the product was last modified           |
| data      | `JSON`    | The data object containing the fields of this product |
