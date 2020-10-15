---
id: adding-field-DB
title: Add field to DB model
---

### Intro

As we know, to use **mongoDB** data bases we should define a modal **schema** first. the schema define's the model **data types** and enable us to make actions related to the DB (save, delete, update etc).

the schema defined using **mongoose**, wich provides a straight-forward, schema-based solution to model your application data. you can find more information about mongoose at the official [docs](https://mongoosejs.com).

:::note
For this example, we will take a look at the **User** schema wich placed at **server > models > User.js**.
:::

### Example
At the User.js file, we can find a few things:

- **User schema**.
- **Password encryption function**.
- **Token generator function**.
- **Find user by credentials function**.

<br/>

#### User schema example

```javascript
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
  resetToken: String,
  resetTokenExpiration: Date,
});
```

<br/>

:::note
To make use of a new data field at the server, please make sure to **add it first** to the corresponding schema first, and then use it as you wish.
be aware that creating a defenite new model is possible too.
:::



