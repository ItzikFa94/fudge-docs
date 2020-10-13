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

