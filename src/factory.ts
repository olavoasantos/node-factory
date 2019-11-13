import faker from 'faker';
import { merge, resolveArgs } from './helpers';
import { DatabaseConfig, FactoryGenerator, GenericExtension, IDataObject, IFactoryObject, StateGenerator } from './types';

const factory = <T, A = GenericExtension<T>>(generator: FactoryGenerator) => {
  const database: DatabaseConfig<T> = {
    async insert(data: T) {
      return data;
    },
    async hydrate(data: T) {
      return data;
    },
  };

  const generate = (overrides: IDataObject | any[] | null = null) => {
    const data = generator(faker);

    if (overrides === null) {
      return merge(data, Array.isArray(data) ? [] : {}) as T;
    }

    return merge(data, overrides) as T;
  };

  const make = (count?: number | IDataObject, overrides?: IDataObject) => {
    let mock: T | T[];
    if (count === undefined) {
      mock = generate() as T;
    } else if (count < 1) {
      mock = [generate()] as T[];
    } else if (typeof count === 'object') {
      mock = generate(count) as T;
    } else {
      const { data, length } = resolveArgs(count, overrides);
      mock = Array.from({ length }).map(() => generate(data)) as T[];
    }

    faker.seed(faker.random.number());

    return mock;
  }

  const create = async (count?: number | IDataObject, overrides?: IDataObject) => {
    let mock: T | T[];
    if (count != null && count < 1) {
      mock = [generate()] as T[];
    } else if (!Boolean(count)) {
      mock = generate() as T;
    } else if (typeof count === 'object') {
      mock = generate(count) as T;
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
  }

  const only = (keys: keyof T | Array<keyof T>, overrides: IDataObject = {}) => {
    const data = make(overrides);

    return (Array.isArray(keys)
      ? keys.reduce((filtered: Partial<T>, key) => ({ ...filtered, [key]: (data as Partial<T>)[key] }), {})
      : { [keys]: (data as Partial<T>)[keys] }) as Partial<T>;
  };

  const seed = (value: number) => {
    faker.seed(value);
    return factoryObject;
  };

  const state = (name: string, stateValues: IDataObject) => {
    if (['create', 'make', 'only', 'seed', 'state', 'configDatabase'].indexOf(name) < 0) {
      const stateGenerator = (count: number | IDataObject = 1, overrides?: IDataObject) => {
        let mock: T | T[];
        if (count === undefined) {
          mock = generate(stateValues) as T;
        } else if (count < 1) {
          mock = [generate(stateValues)] as T[];
        } else if (typeof count === 'object') {
          mock = generate({
            ...stateValues,
            ...count,
          }) as T;
        } else {
          const { data, length } = resolveArgs(count, overrides);
          mock = Array.from({ length }).map(() =>
            make({
              ...stateValues,
              ...data,
            }),
          ) as T[];
        }

        faker.seed(faker.random.number());

        return mock
      }

      (factoryObject as any)[name as keyof A] = stateGenerator as StateGenerator<T>;
    }
  };

  const configDatabase = (options: DatabaseConfig<T>) => {
    Object.keys(database).forEach((key: string) => {
      if ((options as any)[key]) {
        (database as any)[key] = (options as any)[key];
      }
    });
  }

  const factoryObject = { create, make, only, seed, state, configDatabase };

  return factoryObject as IFactoryObject<T> & A;
};

export default factory;
