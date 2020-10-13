---
id: handling-errors
title: Errors handling
---

### Intro

As our application grows, the way we are handling errors should become more elegant, clean and efficient to prevent missunderstadings and time waste.

Fudge's team, created a simple and maintainable way to handle errors by using **redux**'s state and a
general error modal (wich can be replaced).


### The state

At any given time, the application holds in redux's state a value called "error".
the "error" holds a boolean value wich determines wether or not to give the end-user an indication about erorr happening.

The initial error state can be found at: <br/> **client > app > containers > App > reducer.js**

```javascript
export const initialState = {
  //other key:value pairs
  error: false,
  //other key:value pairs
};
```

### Error handling steps

To update the redux error state value, we should make several steps:
- Create an action
- Create a constant
- Add a specific corresponding case in the reducer
- Dispatch the action with some event

examples:


**Action**
```javascript
export function setError() {
  return {
    type: SET_ERROR,
    error: true
  };
}
```

**Constant**
```javascript
export const SET_ERROR = 'boilerplate/App/SET_ERROR';
```

**Reducer**
```javascript
case RESET_ERROR:
        draft.error = action.error;
        break;
```

**Dispatch**
```javascript
onClick={() => dispatch(setError())}
```

### Use case

:::note
For the use case example, we will take a look at the "signUpUser" error handling flow.
wich located in **client > app > containers > SignUpUser > saga.js**.
:::

As we can see at the saga.js file, the api call placed inside try/catch block. the reason for that is the fact that if somthing went wrong at the server or with the call to the end point, we want to activate an **action** that will update the error's state. as we can see:

```javascript
yield put(userSignUpError(err));
```

the userSignUpError action imported from actions.js as we can see at the top of the file:

```javascript
import { userSignUpError } from '../App/actions';
```

the action accept's the server response (if exists) and decide's what to return:

```javascript
export function userSignUpError(error) {
  try {
    const res = JSON.parse(String(error).slice(7));
    if (res.code === 11000) {
      return {
        type: SIGNUP_USER_ERROR,
        error: 'User Already Exists'
      };
    }
    return {
      type: SIGNUP_USER_ERROR,
      error,
    };
  } catch (e) {
    return {
      type: SIGNUP_USER_ERROR,
      error,
    };
  }
}
```

then, the error state updated and indicates the end-user that somthing went wrong.