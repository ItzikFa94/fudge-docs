---
id: socket-notifications
title: Socket.io notifications
---


### Intro

Fudge allows you to notify a specific user or all users when an event occurs.
This push notification functionality has been implemented with **Socket.io**.

Here's how we can set **new notification** in few steps, using example of notify user when his item is ready.

:::note

Please navigate to the main **server** folder in your project before you start following the creation steps.

:::


### Setting new notification

1.1 Navigate to **server > services > socketServies.js**,

1.2 Create events dictionary, where key is capital letters and value is lowercase letters, for example:


```javascript
const events = {
  GENERATE_COMPLETE: 'generate_complete'
};
```

### Sending the notification from server side
2.1 Navigate to where you wold like to send the notification from,
and import **events** and **sockets** as below.

```javascript
const sockets = require('../events/sockets');
const { events: SocketEvents } = require('../services/socketService');
```

2.2 Using **emit** function by **sockets** will throw dispatch, you should transfer **'notify-user'** to notify a specific user or **'notify-users'** for notifying group of users.

1. User ID - The user identifier

2. Event type - As listed under **events** object from **socketServies.js**

3. Payload - The data to send to the user. (Optional - Can be empty {})


```javascript
    sockets.emit('notify-user', [
      user_id, // User ID
      SocketEvents.GENERATE_COMPLETE, // Event type
      user.products //Payload 
    ]);
```


### Recieving the notification on user side

3.1 Navigate to **client > app > containers > App > constants.js**

3.2 Create new constant and export it.

```javascript
export const GENERATE_NEW_PROJECT_SUCCESS = 'boilerplate/PRIVATE/GENERATE_NEW_PROJECT_SUCCESS';
```

3.3 Navigate to app's saga, **client > app > containers > saga.js**.

3.4 Import the const we just declared.

```javascript
import { GENERATE_NEW_PROJECT_SUCCESS } from './constants';
```

3.5 Under **subscribe** function, insert the **emit** call as below with out const under type field, and payload under data field to be send to user.

```javascript
function subscribe(socketParm) {
  return eventChannel(emit => {
    socketParm.on('generate_complete', (payload) => {
      emit({ type: GENERATE_NEW_PROJECT_SUCCESS, data: payload });
    });
    return () => { };
  });
}
```

3.6 Navigate to the reducer, **client > app > containers > App > reducer.js**

3.7 Import the const we declared before.

```javascript
import { GENERATE_NEW_PROJECT_SUCCESS } from './constants';
```

3.8 Insert new **case** under **produce function**, in our example we are updating **products** attribute.

```javascript
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GENERATE_NEW_PROJECT_SUCCESS:
        draft.products = action.data;
        break;
    }
  });
  ```


