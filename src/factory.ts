import faker from 'faker';
import { DEFAULT_DATABASE_CONFIG } from './constants';
import { isFunction, merge, resolveArgs } from './helpers';
import {
  DatabaseConfig,
  FactoryGenerator,
  GenericExtension,
  IDataObject,
  IFactoryObject,
  StateGenerator,
} from './types';

const factory = <T, A = GenericExtension<T>>(generator: FactoryGenerator) => {
  const database: DatabaseConfig<T> = DEFAULT_DATABASE_CONFIG;

  const generate = (overrides: IDataObject | any[] | null = null) => {
    const data = generator(faker);

    if (overrides === null) {
      return merge(data, Array.isArray(data) ? [] : {}) as T;
    }

    return merge(data, overrides) as T;
  };

  const make = (count?: number | IDataObject | FactoryGenerator, overrides?: IDataObject | FactoryGenerator) => {
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

    faker.seed(faker.random.number());

    if (Array.isArray(mock)) {
      return mock.map((model: T) => {
        return database.hydrate(model);
      });
    }

    return database.hydrate(mock);
  };

  const create = async (
    count?: number | IDataObject | FactoryGenerator,
    overrides?: IDataObject | FactoryGenerator,
  ) => {
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

    faker.seed(faker.random.number());

    if (Array.isArray(mock)) {
      return await Promise.all(
        mock.map(async (model: T) => {
          await database.insert(model);
          return database.hydrate(model);
        }),
      );
    }

    await database.insert(mock);
    return database.hydrate(mock);
  };

  const only = (keys: keyof T | Array<keyof T>, overrides: IDataObject | FactoryGenerator = {}) => {
    const overrideData = isFunction(overrides) && typeof overrides === 'function' ? overrides(faker) : overrides;
    const data = make(overrideData);

    return (Array.isArray(keys)
      ? keys.reduce((filtered: Partial<T>, key) => ({ ...filtered, [key]: (data as Partial<T>)[key] }), {})
      : { [keys]: (data as Partial<T>)[keys] }) as Partial<T>;
  };

  const seed = (value: number) => {
    faker.seed(value);
    return factoryObject;
  };

  const state = (name: string, stateValues: IDataObject | FactoryGenerator) => {
    if (['create', 'make', 'only', 'seed', 'state', 'configDatabase'].indexOf(name) < 0) {
      const stateData = isFunction(stateValues) && typeof stateValues === 'function' ? stateValues(faker) : stateValues;
      const stateGenerator = (
        count: number | IDataObject | FactoryGenerator,
        overrides?: IDataObject | FactoryGenerator,
      ) => {
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

        faker.seed(faker.random.number());

        if (Array.isArray(mock)) {
          return mock.map((model: T) => {
            return database.hydrate(model);
          });
        }

        return database.hydrate(mock);
      };

      (factoryObject as any)[name as keyof A] = stateGenerator as StateGenerator<T>;
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

  return factoryObject as IFactoryObject<T> & A;
};

export default factory;
