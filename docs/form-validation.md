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

As we can see, the "useForm" method wich provided by react-hook-form is imported at the toip of the file:

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