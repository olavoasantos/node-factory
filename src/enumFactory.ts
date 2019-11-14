import faker from 'faker';
import { isFunction } from './helpers';
import { EnumFactory } from './types';

const enumFactory = <T = any>(array: any[] | ((fake: any) => any)) => {
  const generator = (n?: number): any[] => {
    if (isFunction(array) && typeof array === 'function') {
      return Array.from({ length: n || faker.random.number(10) }).map(() => array(faker));
    }

    return array as any[];
  };

  const get = (n?: number) => {
    let mock: any | any[];
    if (n === undefined) {
      mock = faker.helpers
        .shuffle<T>([...generator()])
        .pop();
    } else if (n < 1) {
      mock = faker.helpers
        .shuffle<T>([...generator()])
        .slice(0, 1);
    } else {
      mock = Array.from({ length: n }).map(() =>
        faker.helpers
          .shuffle<T>([...generator(n)])
          .pop(),
      );
    }

    faker.seed(faker.random.number());

    return mock as Partial<T>;
  };

  const unique = (n?: number) => {
    let mock: any | any[];
    if (n === undefined) {
      mock = faker.helpers
        .shuffle<T>([...generator()])
        .pop();
    } else if (n < 1) {
      mock = faker.helpers
        .shuffle<T>([...generator()])
        .slice(0, 1);
    } else {
      const N = !Array.isArray(array) || n < array.length ? n : array.length;
      const partial = faker.helpers.shuffle<T>([...generator(N)]);
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
