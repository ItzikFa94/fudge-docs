---
id: getting-data-server
title: Getting data from server
---

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

As we can see, the response will be stored in a constant variable called **userData**.

