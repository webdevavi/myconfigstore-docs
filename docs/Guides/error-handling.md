---
sidebar_position: 2
---

# Error Handling

We use standard HTTP Error Codes for returning errors in the response.

## Error Response

Shape of the error response data will be something like this:

```json
{
  "code": "400", // The error code
  "message": "Store Id is required" // The error description
}
```

## Error Codes

You can expect the following error codes:

### 400 - Bad Request

You should expect this error if you don't provide a valid store name in the subdomain of the API endpoint you are making request to.

#### For example:

```js
// This is a not valid product url
const invalidProductUrl = "https://myconfig.store/api/v1/my_product";
const invalidProductUrl2 = "https://www.myconfig.store/api/v1/my_product";

// This is a valid product url
const validProductUrl = "https://my_store.myconfig.store/api/v1/my_product";
```

### 403 - Forbidden

You should expect this error in two cases:

- If your current subscription plan or trial has expired.
- If you have not provided the correct store key or keys hash.

### 404 - Not Found

You should expect this error in two cases:

- If the store/product doesn't exist anymore or is not active.
- If the user who created the store doesn't exist.

### 500 - Server Error

This error code is rare but you can expect this error if some error occurs in our server.
