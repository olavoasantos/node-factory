import faker from 'faker';
import { isObject, resolveArgs } from './helpers';
import { FactoryGenerator, GenericExtension, IDataObject, IFactoryObject, StateGenerator } from './types';

export * from './types';

const database = {
  async insert(data: any) {
    return data;
  },
  async hydrate(data: any) {
    return data;
  },
};

export const merge = (data: IDataObject, overrides: IDataObject): IDataObject => {
  if (Array.isArray(data) && Array.isArray(overrides)) {
    return data.map((value: any, key: number) => {
      return key < overrides.length ? overrides[key] : value;
    });
  }
  return Object.keys(data).reduce((values, key) => {
    if (Object.keys(overrides).indexOf(key) < 0) {
      return {
        ...values,
        [key]: !isObject(data[key]) ? data[key] : merge(data[key], overrides),
      };
    }

    const { [key]: override, ...rest } = overrides;
    values = { ...values, [key]: override };
    overrides = rest;

    return values;
  }, {});
};

export const factory = <T, A = GenericExtension<T>>(generator: FactoryGenerator): IFactoryObject<T> & A => {
  const generate = (overrides: IDataObject | any[] | null = null) => {
    const data = generator(faker);

    if (overrides === null) {
      return merge(data, Array.isArray(data) ? [] : {}) as T;
    }

    return merge(data, overrides) as T;
  };

  function create(): T;
  function create(overrides: IDataObject): T;
  function create(count: number): T[];
  function create(count: number, overrides: IDataObject): T[];
  function create(count?: number | IDataObject, overrides?: IDataObject) {
    if (!Boolean(count) || (count && count < 1)) {
      return generate() as T;
    }

    if (typeof count === 'object') {
      return generate(count) as T;
    }

    const { data, length } = resolveArgs(count, overrides);
    return Array.from({ length }).map(() => generate(data)) as T[];
  }

  async function make(): Promise<T>;
  async function make(overrides: IDataObject): Promise<T>;
  async function make(count: number): Promise<T[]>;
  async function make(count: number, overrides: IDataObject): Promise<T[]>;
  async function make(count?: number | IDataObject, overrides?: IDataObject): Promise<T | T[]> {
    let mock: T | T[];
    if (!Boolean(count) || (count && count < 1)) {
      mock = generate() as T;
    } else if (typeof count === 'object') {
      mock = generate(count) as T;
    } else {
      const { data, length } = resolveArgs(count, overrides);
      mock = Array.from({ length }).map(() => generate(data)) as T[];
    }

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
    const data = create(overrides);

    return (Array.isArray(keys)
      ? keys.reduce((filtered: Partial<T>, key) => ({ ...filtered, [key]: (data as Partial<T>)[key] }), {})
      : { [keys]: (data as Partial<T>)[keys] }) as Partial<T>;
  };

  const seed = (value: number): IFactoryObject<T> => {
    faker.seed(value);
    return factoryObject;
  };

  const state = (name: string, stateValues: IDataObject) => {
    if (['create', 'make', 'only', 'seed', 'state'].indexOf(name) < 0) {
      function stateGenerator(): T;
      function stateGenerator(overrides: IDataObject): T;
      function stateGenerator(count: number): T[];
      function stateGenerator(count: number, overrides: IDataObject): T[];
      function stateGenerator(count: number | IDataObject = 1, overrides?: IDataObject): T | T[] {
        if (!Boolean(count) || (count && count < 1)) {
          return generate(stateValues) as T;
        }

        if (typeof count === 'object') {
          return generate({
            ...stateValues,
            ...count,
          }) as T;
        }

        const { data, length } = resolveArgs(count, overrides);
        return Array.from({ length }).map(() =>
          create({
            ...stateValues,
            ...data,
          }),
        ) as T[];
      }

      (factoryObject as any)[name as keyof A] = stateGenerator as StateGenerator<T>;
    }
  };

  const factoryObject = { create, make, only, seed, state };

  return factoryObject as IFactoryObject<T> & A;
};
