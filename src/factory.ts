import faker from 'faker';
import { DEFAULT_DATABASE_CONFIG } from './constants';
import { isFunction, merge, resolveArgs } from './helpers';
import {
  DatabaseConfig,
  DataObject,
  Factory,
  FactoryGenerator,
  GenericExtension,
  MakeMethod,
  Overrides,
} from './types';

const factory = <T, A = GenericExtension<T>>(generator: FactoryGenerator<T>) => {
  const database: DatabaseConfig<T> = { ...DEFAULT_DATABASE_CONFIG };

  const generate = (overrides: DataObject | any[] | null = null) => {
    const data = generator(faker);

    if (overrides === null) {
      return merge(data, Array.isArray(data) ? [] : {}) as T;
    }

    return merge(data, overrides) as T;
  };

  const make = (count?: number | Overrides<T>, overrides?: Overrides<T>) => {
    let mock: T | T[];
    if (count === undefined) {
      mock = generate() as T;
    } else if (count < 1) {
      mock = [generate()] as T[];
    } else if (typeof count === 'object') {
      mock = generate(count) as T;
    } else if (isFunction(count) && typeof count === 'function') {
      mock = generate(count(faker)) as T;
    } else {
      const { data, length } = resolveArgs(count, overrides);
      mock = Array.from({ length }).map(() => generate(data)) as T[];
    }

    faker.seed(faker.datatype.number());

    if (Array.isArray(mock)) {
      return mock.map((model: T) => {
        return database.hydrate(model);
      });
    }

    return database.hydrate(mock);
  };

  const create = async (count?: number | Overrides<T>, overrides?: Overrides<T>) => {
    let mock: T | T[];
    if (count != null && count < 1) {
      mock = [generate()] as T[];
    } else if (!Boolean(count)) {
      mock = generate() as T;
    } else if (typeof count === 'object') {
      mock = generate(count) as T;
    } else if (isFunction(count) && typeof count === 'function') {
      mock = generate(count(faker)) as T;
    } else {
      const { data, length } = resolveArgs(count, overrides);
      mock = Array.from({ length }).map(() => generate(data)) as T[];
    }

    faker.seed(faker.datatype.number());

    if (Array.isArray(mock)) {
      return await Promise.all(
        mock.map(async (model: T) => {
          return database.hydrate((await database.insert(model)) ?? model);
        }),
      );
    }

    return database.hydrate((await database.insert(mock)) ?? mock);
  };

  const only = (keys: keyof T | (keyof T)[], count?: number | Overrides<T>, overrides?: Overrides<T>) => {
    let data: T;
    if (overrides) {
      data = make(count, overrides);
    } else if (count) {
      data = make(count);
    } else {
      data = make();
    }

    const filter = (generatedData: T) =>
      Array.isArray(keys)
        ? keys.reduce((filtered: Partial<T>, key) => ({ ...filtered, [key]: (generatedData as Partial<T>)[key] }), {})
        : { [keys]: (generatedData as Partial<T>)[keys] };

    return Array.isArray(data) ? data.map(filter) : filter(data);
  };

  const seed = (value: number) => {
    faker.seed(value);
    return factoryObject;
  };

  const state = (name: string, stateValues: Overrides<T>) => {
    if (['create', 'make', 'only', 'seed', 'state', 'onInsert', 'onHydrate'].indexOf(name) < 0) {
      const stateData = isFunction(stateValues) && typeof stateValues === 'function' ? stateValues(faker) : stateValues;
      const makeMethod = (count: number | Overrides<T>, overrides?: Overrides<T>) => {
        let mock: T | T[];
        if (count === undefined) {
          mock = generate(stateData) as T;
        } else if (count < 1) {
          mock = [generate(stateData)] as T[];
        } else if (typeof count === 'object') {
          mock = generate({ ...stateData, ...count }) as T;
        } else if (isFunction(count) && typeof count === 'function') {
          mock = generate({ ...stateData, ...count(faker) }) as T;
        } else {
          const { data, length } = resolveArgs(count, overrides);
          mock = Array.from({ length }).map(() => generate({ ...stateData, ...data })) as T[];
        }

        faker.seed(faker.datatype.number());

        if (Array.isArray(mock)) {
          return mock.map((model: T) => {
            return database.hydrate(model);
          });
        }

        return database.hydrate(mock);
      };

      (factoryObject as any)[name as keyof A] = makeMethod as MakeMethod<T>;
    }
  };

  const onInsert = (func: (data: T) => Promise<any>) => {
    database.insert = func;

    return factoryObject;
  };

  const onHydrate = (func: (data: T) => Promise<any>) => {
    database.hydrate = func;

    return factoryObject;
  };

  const factoryObject = { create, make, only, seed, state, onInsert, onHydrate };

  return factoryObject as Factory<T> & A;
};

export default factory;
