import { IDataObject } from './types';

export const isObject = (variable: any) => {
  return variable && typeof variable === 'object' && variable.constructor === Object;
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
