# Node Factory

![version](https://img.shields.io/npm/v/node-factory.svg)
![issues](https://img.shields.io/github/issues/olavoasantos/node-factory.svg)
![issues](https://img.shields.io/github/issues-pr/olavoasantos/node-factory.svg)

When developing or testing your application, you might need to mock data comming from a database or an endpoint. Instead of manually generating "random" data, you can use model factories.
This package allows you to define a default set of attributes for each of your endpoints or models and easily mock responses.

## Docs

1. [Main](https://olavoasantos.github.io/node-factory/)
2. [API](https://olavoasantos.github.io/node-factory/api/factory)
3. [Examples](https://olavoasantos.github.io/node-factory/api/factory)

## Installation

If you're using `yarn`:

```bash
yarn add -D node-factory
```

Or, if you're using `npm`:

```bash
npm install --save-dev node-factory
```

## Usage

```js
// 1. Import the factory generator
import { factory } from 'node-factory';

// 2. Create a factory
const UserFactory = factory(fake => ({
  id: fake.random.uuid(),
  name: fake.name.findName(),
  email: fake.internet.email(),
}));

// 3. Generate data
UserFactory.create();
```

## Author

- [Olavo Amorim Santos](https://github.com/olavoasantos)
