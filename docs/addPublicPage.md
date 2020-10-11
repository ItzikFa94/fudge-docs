---
id: addPublicPage
title: Add new public page
---

As part of the Authentication proccess we implemented in fudge, the end-user exposed to both **public** and **protected** pages.

Here's how we can add a **public** page that every user can access in 2 simple steps.

:::note

Please navigate to the main **client** folder in your project before you start following the creation steps.

:::




### Step one
1.1 Navigate to **client > app > containers**,

1.2 Create a continer folder for the public page.


1.3 Inside the container folder, create an index.js file with the file content (React compoennt).

```javascript
function publicPage(){
    return (
        <div>
            <h1>This is a public page</h1>
        </div>
    )
}
```

### Step two
2.1 Navigate to **client > app > containers > App > index.js**,
and import the container folder you just created at the imports section (top).

```javascript
import { publicPage } from 'PublicPage'
```

2.2 Inside index.js, create a route using **Route** method (imported) and place it between the `<Switch>` tags.


Please make sure you are using a unic path for the path prop and fill the component prop with the component you just imported.

```javascript
<Route path='public-page/example' component={publicPage} />
```

for more information about the "Route" or "Switch" methods please check the react-router official [docs](https://reactrouter.com).


