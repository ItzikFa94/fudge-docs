---
id: responsiveness
title: Responsiveness
---


### Intro

In order to keep fudge a modern and useful boilerplate, fudge's team created a **respnsive** design for the entire app wich enable using the app with mobile and other devices.

### Use case

While deloping a resposive web app, there are a lot of options and best practices to do so.
on fudge, we used the ``@media`` css query to determine what style to apply, as we can see at
** client > app > components > Header > NavBar.js**.

```javascript
 @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
```

<br/>

:::note
It is recomanded to use **%** units while develop a responsive design.
:::