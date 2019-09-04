import faker from 'faker';
import { isObject } from './helpers';
import { FactoryGenerator, IDataObject, IFactoryObject } from './types';

export * from './types';

export const resolveArgs = (...args: any[]): IDataObject =>
  args.reduce(
    (resolved, arg) => {
      if (typeof arg === 'number') {
        return { ...resolved, length: arg > 0 ? arg : 1 };
      } else if (typeof arg === 'object') {
        return { ...resolved, data: arg };
      } else {
        return resolved;
      }
    },
    { length: 1, data: {} },
  );

export const merge = (data: IDataObject, overrides: IDataObject): IDataObject => {
  return Object.keys(data).reduce((values, key) => {
    if (!overrides[key]) {
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

export const factory = (generator: FactoryGenerator): IFactoryObject => {
  const create = (overrides: IDataObject = {}): IDataObject => {
    const data = generator(faker);

    return merge(data, overrides);
  };

  const make = (count: number | IDataObject = 1, overrides?: IDataObject): IDataObject[] => {
    const { data, length } = resolveArgs(count, overrides);

    return Array.from({ length }).map(() => create(data));
  };

  const only = (keys: string | string[], overrides: IDataObject = {}): IDataObject => {
    const data = create(overrides);

    return Array.isArray(keys)
      ? keys.reduce((filtered: IDataObject, key) => ({ ...filtered, [key]: data[key] }), {})
      : { [keys]: data[keys] };
  };

  const seed = (value: number) => {
    faker.seed(value);
    return factoryObject;
  };

  const factoryObject: IFactoryObject = { create, make, only, seed };

  return factoryObject;
};
