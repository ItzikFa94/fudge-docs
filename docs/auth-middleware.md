---
id: auth-middleware
title: The auth middleware
---

### Intro 

The fudge's team, created a simple and secure **authentication** process that enable to expose loged in users to sensitive information and block unloged users from it.

down below, you will find all the information about the **proccess**, how it works and how to update it by your needs.

:::note
Please navigate to **server > middleware > auth.js** and follow the steps down below.
:::

### The auth

Inside the auth file, we can find all the authentication logic of our app. in fudge, we are using the auth as a middleware, you can read more about it at the official express [docs](https://expressjs.com/en/guide/using-middleware.html).

the use of auth located inside the routes as an argument, example:

```javascript
router.post('/users/logout', auth, controller.logOut);
```

