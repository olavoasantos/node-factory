# Node factory

## About

When developing or testing your application, you might need to mock data comming from a database or an endpoint. Instead of manually generating "random" data, you can use model factories. This package allows you to define a default set of attributes for each of your endpoints or models and easily mock responses.

## Usage

### Defining your factories

First off, create an endpoint where you can define your factories:

```js
const factory = require('node-factory');

// Here you can declare your factories

module.exports = factory;
```
