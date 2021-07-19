import faker from 'faker';
import { isFunction } from './helpers';
import { EnumFactory } from './types';

const enumFactory = <T = any>(array: any[] | ((fake: any) => any)) => {
  const generator = (n?: number): any[] => {
    if (isFunction(array) && typeof array === 'function') {
      return Array.from({ length: n || faker.datatype.number(10) }).map(() => array(faker));
    }

    return array as any[];
  };

  const get = (n?: number) => {
    let mock: any | any[];
    if (n === undefined) {
      const data = generator();
      const rand = faker.datatype.number(data.length - 1);
      mock = faker.helpers.shuffle<T>([...data])[rand];
    } else if (n < 1) {
      const data = generator();
      const rand = faker.datatype.number(data.length - 1);
      mock = faker.helpers.shuffle<T>([...data]).slice(rand, rand + 1);
    } else {
      mock = Array.from({ length: n }).map(() => {
        const data = generator(n);
        const rand = faker.datatype.number(data.length - 1);
        return faker.helpers.shuffle<T>([...data])[rand];
      });
    }

    faker.seed(faker.datatype.number());

    return mock as Partial<T>;
  };

  const unique = (n?: number) => {
    let mock: any | any[];
    if (n === undefined) {
      const data = generator();
      const rand = faker.datatype.number(data.length - 1);
      mock = faker.helpers.shuffle<T>([...data])[rand];
    } else if (n < 1) {
      const data = generator();
      const rand = faker.datatype.number(data.length - 1);
      mock = faker.helpers.shuffle<T>([...data]).slice(rand, rand + 1);
    } else {
      const N = !Array.isArray(array) || n < array.length ? n : array.length;
      const partial = [...generator(N)];
      mock = Array.from({ length: N }).map(() => {
        return faker.helpers.shuffle<T>(partial).pop();
      });
    }

    faker.seed(faker.datatype.number());

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
