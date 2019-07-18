# LAB - 8

## Models

### Author: Lee-Roy King

### Links and Resources
* [submission PR](https://github.com/leeroywking-401-advanced-javascript/lab8/pull/1)
* [![Build Status](https://www.travis-ci.com/leeroywking-401-advanced-javascript/lab8.svg?branch=master)](https://www.travis-ci.com/leeroywking-401-advanced-javascript/lab8)


#### Documentation
just this file

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
testing should take care of all the usage


### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

### Running the app
#### Routes
router.get('/api/v1/categories', getCategories);
router.post('/api/v1/categories', postCategories);
router.get('/api/v1/categories/:id', getCategory);
router.put('/api/v1/categories/:id', putCategories);
router.delete('/api/v1/categories/:id', deleteCategories);

router.get('/api/v1/products', getProducts);
router.post('/api/v1/products', postProducts);
router.get('/api/v1/products/:id', getProduct);
router.put('/api/v1/products/:id', putProducts);
router.delete('/api/v1/products/:id', deleteProducts);
  
#### Tests
* How do you run tests? npm test


#### UML
Link to an image of the UML for your application and response to events
https://github.com/leeroywking-401-advanced-javascript/lab8/blob/master/uml.jpg