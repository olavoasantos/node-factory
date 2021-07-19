import faker from 'faker';
import { DataObject } from './types';

export const isObject = (variable: any) => {
  return variable && typeof variable === 'object' && variable.constructor === Object;
};

export const isFunction = (variable: any) => {
  return variable && {}.toString.call(variable) === '[object Function]';
};

export { merge } from './deepMerge';

export const resolveArgs = (...args: any[]): DataObject =>
  args.reduce(
    (resolved, arg) => {
      if (typeof arg === 'number') {
        return { ...resolved, length: arg > 0 ? arg : 1 };
      } else if (typeof arg === 'object') {
        return { ...resolved, data: arg };
      } else if (isFunction(arg) && typeof arg === 'function') {
        return { ...resolved, data: arg(faker) };
      } else {
        return resolved;
      }
    },
    { length: 1, data: {} },
  );
