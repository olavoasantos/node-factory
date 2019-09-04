export const isObject = (variable: any) => {
  return variable && typeof variable === 'object' && variable.constructor === Object;
};
