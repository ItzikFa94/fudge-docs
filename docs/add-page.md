---
id: add-page
title: Add new page
---

As part of the Authentication proccess we implemented in fudge, the end-user exposed to both **public** and **private** pages.

Here's how we can add **public** and **private** pages in 2 simple steps.

:::note

Please navigate to the main **client** folder in your project before you start following the creation steps.

:::




### Step one
1.1 Navigate to **client > app > containers**,

1.2 Create a continer folder for the public page.


1.3 Inside the container folder, create an index.js file with the file content (React compoennt).

```javascript
function newPage(){
    return (
        <div>
            <h1>This is a new page</h1>
        </div>
    )
}
```

### Step two
2.1 Navigate to **client > app > containers > App > index.js**,
and import the container folder you just created at the imports section (top).

```javascript
import { newPage } from 'NewPage'
```

#### Add public page

2.2 Inside index.js, create a route using **Route** method (imported) and place it between the `<Switch>` tags.


Please make sure you are using a unic path for the path prop and fill the component prop with the component you just imported.

```javascript
<Route path='public-page/example' component={newPage} />
```

for more information about the "Route" or "Switch" methods please check the react-router official [docs](https://reactrouter.com).

#### Add privage page

2.2 Inside index.js, create a route using **PrivateRoute** method (imported) and place it between the `<Switch>` tags.


Please make sure you are using a unic path for the path prop and fill the component prop with the component you just imported.

```javascript
<PrivateRoute path='private-page/example' component={newPage} />
```

notice that fudge's team created the PrivateRoute component using <br/> `<Route />` by react router, you can find it in the **client > app > components > PrivateRoute** folder.

#### PrivateRoute component

The PrivateRoute component built with `<Route />` and `<Redirect />` which provided by react-router, more about react-router methods can be found in the official [docs](https://reactrouter.com).


The component detect's authenticated user's by checking redux state, and decide wether to give them access to the protected route, or to make a redirect to the login page instead.


