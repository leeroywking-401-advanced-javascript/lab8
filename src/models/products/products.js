'use strict';

// How can we connect ourselves to the mongo interface?
const Model = require('../mongo.js');
const schema = require('./products-schema.js');

// What do we export?
class Products extends Model {
  constructor() {
    super(schema);
  }
}


// What do we export?
module.exports = Products;