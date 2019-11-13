# Node Factory

![version](https://img.shields.io/npm/v/node-factory.svg)
![issues](https://img.shields.io/github/issues/olavoasantos/node-factory.svg)
![issues](https://img.shields.io/github/issues-pr/olavoasantos/node-factory.svg)

When developing or testing your application, you might need to mock data comming from a database or an endpoint. Instead of manually generating "random" data, you can use model factories.
This package allows you to define a default set of attributes for each of your endpoints or models and easily mock responses.

## Docs

Check out our documentation for APIs and examples at [https://olavoasantos.github.io/node-factory/](https://olavoasantos.github.io/node-factory/)

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

```typescript
// 1. Import the factory generator
import { factory } from 'node-factory';

// 2. Create a factory
interface User {
  id: string;
  name: string;
  email: string;
}

const UserFactory = factory<User>(fake => ({
  id: fake.random.uuid(),
  name: fake.name.findName(),
  email: fake.internet.email(),
}));

// 3. Generate data
UserFactory.make();
```

## Author

- [Olavo Amorim Santos](https://github.com/olavoasantos)
