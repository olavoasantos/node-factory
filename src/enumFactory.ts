import faker from 'faker';
import { EnumFactory } from './types';

const enumFactory = <T = any>(array: any[]) => {
  const get = (n?: number) => {
    let mock: any | any[];
    if (n === undefined) {
      mock = faker.helpers.shuffle<T>([...array]).pop();
    } else if (n < 1) {
      mock = faker.helpers.shuffle<T>([...array]).slice(0, 1);
    } else {
      mock = Array.from({ length: n }).map(() => faker.helpers.shuffle<T>([...array]).pop());
    }

    faker.seed(faker.random.number());

    return mock as Partial<T>;
  };

  const unique = (n?: number) => {
    let mock: any | any[];
    if (n === undefined) {
      mock = faker.helpers.shuffle<T>([...array]).pop();
    } else if (n < 1) {
      mock = faker.helpers.shuffle<T>([...array]).slice(0, 1);
    } else {
      const N = n < array.length ? n : array.length;
      const partial = faker.helpers.shuffle<T>([...array]);
      mock = Array.from({ length: N }).map(() => {
        return partial.pop();
      });
    }

    faker.seed(faker.random.number());

    return mock as Partial<T>;
  };

  const seed = (value?: number) => {
    if (value) {
      faker.seed(value);
    }
    return enumFactoryObject;
  };

  const enumFactoryObject = { seed, get, unique };

  return enumFactoryObject as EnumFactory<T>;
};

export default enumFactory;
