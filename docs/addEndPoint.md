---
id: addEndPoint
title: Add new end point
---

Fudge's server created by using Node & Express js.
By using those cutting edge technologies, we created an authentication system that allows to 
protect some routes and expose others.

In this light and easy tutorial, we will guide you step by step how to create a completly new server end point with or without **auth**.


:::note

Please navigate to the main **server** folder in your project before you start following the creation steps.

:::

### Step one

1.1 Navigate to **server > controllers**.

1.2 Create a new file that will hold the end point **logic**.

1.3 Inside the file, create an async function with the params **req** and **res**, you can find more about express routes in the express official [docs](http://expressjs.com).

```javascript
//Make sure to export the function with "exports" like so:
exports.exampleRoute = async (req, res) => {
  try {
      /* Logic goes here */
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
}
```


### Step two

2.1 Navigate to **server > router** and create a "routes container" file.

2.2  In the file, make sure to import express, express router, the new route you just created, and the auth middleware if you want to create a protected route.

```javascript
const express = require('express');
const controller = require('../controllers/user');
const auth = require('../middleware/auth');
const router = express.Router();
```

2.3 Connect the express router to the route you have just created and imported like the example below:

```javascript
// No auth - Public.
router.post('/example/public', controller.exampleRoute);
// With auth - Protected.
router.post('/example/protected', auth, controller.exampleRoute);

//Make sure the routers exported like below:
module.exports = router;
```

pay attension, the first route created above, is not protected.
whice means every user can hit this end point.

the second one on the other hand, is a protected route, only authenticated users are allowd to call this
end point.

### Step three

3.1 Navigate to **server > app.js**.

3.2 Import the router you just created:

```javascript
const exampleRouter = require("./routers/example");
```

3.3 Sign the router to the app with "use" method which provided by express

```javascript
app.use(exampleRouter);
```
