import { IDataObject } from './types';

export const isObject = (variable: any) => {
  return variable && typeof variable === 'object' && variable.constructor === Object;
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
