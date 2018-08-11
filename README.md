# Node factory

## About

When developing or testing your application, you might need to mock data comming from a database or an endpoint. Instead of manually generating "random" data, you can use model factories. This package allows you to define a default set of attributes for each of your endpoints or models and easily mock responses.

## Usage

### Defining your factories

First off, create an endpoint where you can define your factories:

```js
// ./path/to/factories.js
const { manager, factory } = require('node-factory');

// Here you can declare your factories

module.exports = factory;
```

Here, we are importing the two entities from node-factory. The `manager` is the guy who will register our new factories and the `factory` will be the one who runs them.

So let's create a simple User factory:

```js
// ./path/to/factories.js
const { manager, factory } = require('node-factory');

manager.register('User', faker => {
  return {
    id: faker.random.number(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  }
});

module.exports = factory;
```

So, to create our factory, we need to call the `register` method on the `manager`. This function accepts a factory name and a routine. The routine is a callback which defines how the factory will generate the data and should always return an object. To make things easier, node-factory comes with the awesome [faker.js](https://github.com/Marak/faker.js) package out of the box. This guy is passed into the callback as the firt parameter and will generate random fake data for us.

Finally, we export the `factory` which will be used to generate our mocked data.

### Using our factories

To use our factory, we simply import our factories and call create on the one we need to use:

```js
// ./path/to/where/we/need/the/factory.js
const factory = require('./path/to/factories');

const User = factory('User').create();
```

What we get is something like:

```js
{
  id: 12915,
  name: 'Dr. Mathilde Daugherty',
  email: 'Ferne24@yahoo.com'
}
```

### Cool! But I need a lot of users

Say we need to create not one, but 3 users! No problem! Simply pass in the number of users you need to the `create` method:

```js
// ./path/to/where/we/need/the/factory.js
const factory = require('./path/to/factories');

const User = factory('User').create(3);
```

What we get is something like:

```js
[
  { id: 95933,
    name: 'Autumn Aufderhar III',
    email: 'Ima.Blanda71@hotmail.com'
  },
  { id: 4085,
    name: 'Karianne Jacobson',
    email: 'Allene.Kautzer59@hotmail.com'
  },
  { id: 79811,
    name: 'Gilda Heidenreich',
    email: 'Stanton26@yahoo.com'
  }
]
```

Do notice that, if you pass a number larger than one, you will get an `Array`!!

### Very cool! But what if I need a user with specific data

Sometimes, specially when we are testing, we need to create data with a specific value. To do this, you can simply pass an object to the `create` method. Let's see two examples:

1. So say we need to create a users with no e-mail:

```js
// ./path/to/where/we/need/the/factory.js
const factory = require('./path/to/factories');

const User = factory('User').create({ email: null });
```

And we get something like:

```js
{
  id: 37598,
  name: 'Jesse Cronin',
  email: null
}
```

1. Now say we need to create two users with the same e-mail:

```js
// ./path/to/where/we/need/the/factory.js
const factory = require('./path/to/factories');

const User = factory('User').create({ email: 'SAME@EMAIL.COM' }, 2);
```

And we get something like:

```js
[
  {
    id: 33445,
    name: 'Abby Fahey',
    email: 'SAME@EMAIL.COM'
  },
  {
    id: 13734,
    name: 'Adonis Schmidt',
    email: 'SAME@EMAIL.COM'
  },
]
```

## Author

* [Olavo Amorim Santos](https://github.com/olavoasantos)
