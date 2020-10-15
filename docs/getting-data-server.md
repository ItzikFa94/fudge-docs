---
id: getting-data-server
title: Getting data from server
---

### Intro

The fudge application making heavy use of **redux-saga**, a modern library that aims to make application side effects (like data fetching and accessing the browser cache).

In order to fetch data from the server, fudge's team created a simple work flow that is both efficient and easy to maintain using redux-saga.
for this instance, we will take a look at the "userSignUp" flow and will have a good understanding of how it works.

:::note
the signUpUser function, wich located in **client > app > containers > signUpPage > saga.js**, 
taking care about the communication with the server.
the saga.js file, holds the sign-up flow and activate the right actions depends on the api call response.
:::

### Use case

Inside the saga.js file, we can find the sign-up flow, wich communicate with the server.
for instance, we are making an api call to a server end-point like so:

```javascript
const userData = yield call(request, requestURL, reqOptions);
```

the arguments the "call" method (by [redux-saga](https://redux-saga.js.org)) gets here are:
- **request** - custom fetch function wich created by fudge's team.
- **requestURL** - an end point url address.
- **reqOptions** - the request options like: method, headers etc.

:::note
Pay attention, "reqOptions" hold the request **method**.
please make sure that you use the right method for your api call (GET, POST, PUT etc.).
:::

As we can see, the response will be stored in a constant variable called **userData**.

In addition, the request body that hold's the email, password and confirm password, is sent as a string:

```javascript
body: JSON.stringify({
      email,
      password,
      confirmPassword
    })
```

the server expact to get the body as a **string**, we can find the parsing options at the main app.js file inside the server folder. more about parsing in express can be found at the official [docs](http://expressjs.com/en/api.html#req.body).

### Server and DB

in this case, the end-point url is **"/users/signup"**, wich located at ** server > conrollers > user.js**.

the api call hits the end-point below:

```javascript
exports.signUp = async (req, res) => {
  try {
    const {
      password,
      confirmPassword
    } = req.body;

    if (password !== confirmPassword) throw new Error('Password is not matching');

    const user = new User(req.body);

    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(403).send(error);
  }
}
```

and making use of the **User** model schema (imported at the top of the file).

as we can see the credentials been **saved to the DB**, token has been generated and **sent back to the browser along with the new user details**.
in case of errors, the end-point built with try/catch blocks which indicates about errors and handle them properly.


