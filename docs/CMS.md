---
id: CMS
title: CMS
---

### Intro
We have implemented in fudge a simple and easy to update **Control Management System** that will help the platform/app admin to track, update and delete data directly from the DB and manage all the **collections** that he holds.

in order to view the admin section, please navigate to the **admin** root folder.


:::note
More comprehensive overview can be found at the **Project stracture** section.
:::

### Add new collection
In order to use the **CMS** properly, the app collections should be added to the admin's CMS.
down below you will find explanation on how to do so, for this instance we will implement a **products** collection.
please make sure to create a [Schema](./adding-field-DB.md) before you continue reading.


First, we will create a products connector at **server > connectors** wich will handle all of our logic.
the connector should be a class and should **extend** the base connector.
the base connector that we are extending to create our new connector (products) handles simple operations like get, create, update and etc.

```javascript
const getDB = require('../models/index.js');

module.exports = class BaseConnector {
  constructor(model, options = {}) {
    this.model = getDB(model);
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.ftpConfig = options.ftpConfig;
  }

  normalizeValues(data) {
    const result = {};
    Object.keys(data).forEach(key => {
      let value = data[key];
      if (value === 'undefined') {
        value = undefined;
      }
      result[key] = value;
    })
    return result;
  }

  get (filters) {
    const query = this.model.find();
    if (filters.id) {
      query.where('_id').equals(filters.id);
    }
    return query.exec();
  }

  remove (data) {
    return this.model.findByIdAndRemove(data).exec();
  }
  
  constructUpdateQuery(data) {
    const query = {
      $set: {}
    };

    Object.keys(data).forEach(key => {
      let value = data[key];
      if (value === 'undefined') {
        query['$unset'] = query['$unset'] || {};
        query['$unset'][key] = 1;
      } else {
        query['$set'][key] = value;
      }
    })
    return query;
  }
  
  create (id, data) {
    if(!id){
      delete data._id;
      console.log('base: ', data);
      return this.model.create(data);
    } else {
      const query = this.constructUpdateQuery(data);
      return this.model.findByIdAndUpdate(id, query).exec();
    }
  }
}
```

to implement those operations we dont have to create any other connector.
in order to create new operations, like get a single document from the db, we will have to create a new connector with the correspond logic inside.

```javascript
class ProductsConnector extends BaseConnector {
  constructor(props) {
    super(props)
  }

  get (filters) {
    const query = this.model.find({ _id: props.id });
    query.select({ '__v': 0 })
    return query.exec();
  }
}
```

at the example above, the ``ProductsConnector`` retrieving a specific document from the products collection. fill free to add more functionality to the connector (like remove, update and etc).

after we have created the the relevant connector, we will continue and create a route.
inside **server > controllers > data.js**.

```javascript
exports.fetch = function (req, res) {
  const { isAdmin } = req.user
  if(!isAdmin) return res.send('User is not admin')

  if (!req.query.collection) return res.send('error')

  const queryField = req.query.collection;
  const model = getConnector(queryField);
  const query = model.get(req.query);

  query.then(function (docs) {

    res.json(docs);
  }).catch(e => {
    res.status(500).send('Internal server error')
  });
}
```

pay attention, for security reasons please make sure to add the ``isAdmin`` **authentication** 
to prevent from other users to reach this route.
more information about admin authentication can be found at the **auth middleware** section.

as we can see, we are making use of the connector we have just created and getting back the **docs** (can be change to any other logic or purpose).

make sure to add the route to the admin router wich located at ** server > routers > admin.js**.

### Update the UI

