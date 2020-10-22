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

### The auth logic

Inside the auth file, we can find all the **authentication logic** of our app. in fudge, we are using the auth as a middleware, you can read more about it at the official express [docs](https://expressjs.com/en/guide/using-middleware.html).

As we can see, the first thing happnes is the token validation.
fudge is making use of [JWT](https://jwt.io) for the authentication process to verify the user identity.

after taking the token from the request header, we are verifying the token:

```javascript
const data = jwt.verify(token, process.env.JWT_KEY);
```

by verifying the token, we can indicate whether or not the user is signed up, logged in or can be found at the DB.

### The auth usage

the use of auth located inside the routes as an argument, example:

```javascript
router.post('/users/logout', auth, controller.logOut);
```

can be found at **server > routers > user.js**.

### Admin auth

The auth proccess can include admin authentication also, as we can see at **server > conrollers > data.js**.
the routes we are looking at are protected and visible for admins only, what cousing that is:

```javascript
const { isAdmin } = req.user
if(!isAdmin) return res.send('User is not admin')
```

as we can see, the user object is returned from the auth middleware, then we check for ``isAdmin`` field.
if the the field holds positive value (true) the user is admin and he gain an access to that route.

