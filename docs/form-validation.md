---
id: form-validation
title: Form validation
---

### Intro

In order to create simple yet secure form validations, fudge's team uses the [react-hook-form](https://react-hook-form.com) validation package.

the react-hook-form package enable to create a performant, flexible and extensible forms with easy to use validation.

:::note
For instace, we will take a look at the reset password modal form validation, wich located at **client > app > components > ResetPassModal > index.js**.
:::

### Use case

As we can see, the "useForm" method wich provided by react-hook-form is imported at the top of the file:

```javascript
import { useForm } from 'react-hook-form';
```

the **useForm** function, takes three parameters as arguments like so:

```javascript
const { register, handleSubmit, errors } = useForm({
    validationSchema: createSchemaWithIntl(intl)
});
```

- **register** - a function that "register's" the specific input to the react form hook <code>ref={register}</code>.
- **handleSubmit** - the function that is activated when the form submit's.
- **errors** - the errors may occur during the form submittion.

The **validation process** composed from few parts: the useForm, messages for validation errors and validation rules. as we allready saw, the useForm hook handle the submit, getting the errors and register inputs to the form.

the validation messages that related to the resetPassModal form, located at **client > app > components > ResetPassModal > validation.js** and defines the validation errors may occur:

```javascript
const messages = defineMessages({
  emailRequired: {
    id: `${scope}.emailRequired`,
    defaultMessage: 'Email is required',
  },
  emailValid: {
    id: `${scope}.emailValid`,
    defaultMessage: 'Email must be a valid email',
  }
});
```

the last part of the form validation is the rules. the rules of our form defined at **client > app > components > ResetPassModal > validation.js** and takes care about the validation shape.

```javascript
export const createSchemaWithIntl = (intl) => {
  return yup.object().shape({
    email: yup
      .string()
      .required(intl.formatMessage(messages.emailRequired))
      .email(intl.formatMessage(messages.emailValid))
  });
};
```

as we can see, the shape created using [yup](https://www.npmjs.com/package/yup) package wich is a JavaScript schema builder for value parsing and validation.