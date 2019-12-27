import { DataObject, GenericData } from './types';

const isMergeableObject = (val: GenericData) => val
  && typeof val === 'object'
  && Object.prototype.toString.call(val) !== '[object RegExp]'
  && Object.prototype.toString.call(val) !== '[object Date]';

const emptyTarget = (val: GenericData) => Array.isArray(val) ? [] : {};

const cloneIfNecessary = (value: any) => isMergeableObject(value)
  ? merge(emptyTarget(value), value)
  : value;

const arrayMerge = (target: any[], source: any[]) => target.length > source.length
  ? target.map((el: any, index: number) => index < source.length ? source[index] : el)
  : source.slice();

const mergeObject = (target: DataObject, source: DataObject) => {
  const destination: DataObject = {};

  if (isMergeableObject(target)) {
    Object.keys(target).forEach((key: string) => {
      destination[key] = cloneIfNecessary(target[key]);
    })
  }

  Object.keys(source).forEach((key) => {
    if (!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneIfNecessary(source[key]);
    } else {
      destination[key] = merge(target[key], source[key]);
    }
  });

  return destination;
}

export const merge = (target: GenericData, source: GenericData) => {
  if (typeof target !== typeof source || Array.isArray(target) !== Array.isArray(source)) {
    throw new Error('Cannot merge two distinct elements');
  }

  return (Array.isArray(source))
    ? arrayMerge(target as any[], source)
    : mergeObject(target as DataObject, source);
};
