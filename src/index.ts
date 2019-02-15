import faker from 'faker';
import { FactoryGenerator, IDataObject, IFactoryObject } from './types';

const resolveArgs = (count: number | IDataObject, overrides: IDataObject = {}): IDataObject => {
  let length: number;
  let data: IDataObject;

  if (typeof count !== 'number') {
    data = count;
    length = 1;
  } else {
    data = overrides;
    length = count > 0 ? count : 1;
  }

  return { data, length };
};

export const factory = (generator: FactoryGenerator): IFactoryObject => {
  const create = (overrides: IDataObject = {}): IDataObject => {
    const data = generator(faker);

    return { ...data, ...overrides };
  };

  const make = (count: number | IDataObject = 1, overrides: IDataObject = {}): IDataObject[] => {
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
