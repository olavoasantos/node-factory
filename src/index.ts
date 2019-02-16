import faker from 'faker';
import { FactoryGenerator, IDataObject, IFactoryObject } from './types';

export const resolveArgs = (...args: any[]): IDataObject => args.reduce((resolved, arg) => {
  if (typeof arg === 'number') {
    return { ...resolved, length: arg > 0 ? arg : 1 };
  } else if (typeof arg === 'object') {
    return { ...resolved, data: arg };
  } else {
    return resolved;
  }
}, { length: 1, data: {} });

export const merge = (data: IDataObject, overrides: IDataObject) => {
  const merged = Object.keys(data).reduce((values, key) => {
    if (values.wasMerged) {
      values.data = { ...values.data, [key]: data[key] };
    } else if (!overrides[key]) {
      values.data = { ...values.data, [key]: typeof data[key] !== 'object' ? data[key] : merge(data[key], overrides) };
    } else {
      values.data = { ...values.data, [key]: overrides[key] };
      values.wasMerged = true;
    }

    return values;
  }, { wasMerged: false, data: {} })

  return merged.data;
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
