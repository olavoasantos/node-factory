
const isObject = (variable) => {
  return (typeof variable === 'object' && !Array.isArray(variable) && variable !== null);
}

const isNumber = (variable) => {
  return (typeof variable === 'number');
}

const isString = (variable) => {
  return (typeof variable === 'string');
}

const isArray = (variable) => {
  return (Array.isArray(variable));
}

const isNull = (variable) => {
  return (variable === null);
}

const isUndefined = (variable) => {
  return (variable === undefined);
}

const isFunction = (variable) => {
  return (typeof variable === 'function');
}

module.exports = {
  isFunction, isObject, isNumber, isString, isArray, isNull, isUndefined,
}
