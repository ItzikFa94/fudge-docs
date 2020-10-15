---
id: project-stracture
title: Project stracture
---

### Files stracture tree
```
root-directory
├── client
│   ├── app
│   ├── server
│   ├── node_modules
│   ├── package.json
│   └── package-lock.json
├── server
    ├── app.js
    ├── db
    ├── controllers
    ├── routers
    ├── models
    ├── middleware
    ├── node_modules
    ├── package.json
    └── package-lock.json

```

### Client overview

The **front-end** built with efficient code splliting and maintainable stracture that aims to cut dramatically the time waste that appears when starting a new project.

main parts:
- **Main app.js** - client > app > app.js
- **Routes** - client > app > containers > App > index.js
- **Screens** - client > app > containers
- **Components** - client > app > components
- **Global styles** - client > app > global-styles.js
- **Main saga** - client > app > containers > App > saga.js


### Server overview

The **back-end** built using node & express js best practices and with the most advanced node packages.

main parts:
- **Main app.js** - server > app.js
- **Controllers** - server > controllers
- **DB** - server > db > db.js
- **Auth** - server > middleware > auth.js
- **Schema models** - server > models
- **Express routers** - server > routers
