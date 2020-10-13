---
id: adding-font
title: Add new font
---

### Intro

In order to create an maintainable and efficient application, fudge's team making use of [styled-components](https://styled-components.com), an advanced and modern styling tool.

the font loaded using the styled components technology inside one specific component and enable to make use of it freely.

:::note
The file tht holds the main styles called **global-styles.js**, and can be found at **client > app > global-styles.js**.
:::

### Use case
Inside global-styles.js, we are making use of **createGlobalStyle** method by styled-components, to create the main styles.

```javascript
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;
```

in order to apply different font or styles, please import the wanted font and use it inside the component created. make sure to put it inside the correct section or create a new one.

example:

```javascript
.specialHeader {
    color: red;
}
```
