---
id: using-translations
title: Localization
---

### Intro

To enable a **worldwide** use of fudge, fudge's team created a **localization system** that enables to support a few languages simultaneously.

Down below you will learn how this localization system work's, how to change it and be able to update it as you wish.

:::note
For this example we will take a look at a form validation localization, and the localization strings.
please open both **client > translations > en.json** and **client > app > components > ResetPassModal > messages.js**.
:::

### The strings

As we can see, the en.json file includes a localized strings in english wich devided by sections and fields:

```javascript
  "hybrid.boilerplate.containers.ResetPassModal.email": "Email",
  "hybrid.boilerplate.containers.ResetPassModal.submit": "Submit"
```

every line, have a corresponding use at many places in the app.

for example, if we will take a look at messages.js, we will see that there is a use of:

```javascript
export const scope = 'hybrid.boilerplate.containers.ResetPassModal';
```

wich points to a specific **strings set** at **en.json** and **de.json**