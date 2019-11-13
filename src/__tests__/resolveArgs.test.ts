import { resolveArgs } from '../helpers';

describe('resolveArgs tests', () => {
  const count = 5;
  const overrides = { a: 'A', b: 'B' };

  it('should if first arg is a number and second an object, expect the number and the object', () => {
    const { length, data } = resolveArgs(count, overrides);

    expect(length).toBe(5);
    expect(data).toMatchObject({ a: 'A', b: 'B' });
  });

  it('should if only the first argument and is a number, expect the number and an empty object', () => {
    const { length, data } = resolveArgs(count);

    expect(length).toBe(5);
    expect(data).toMatchObject({});
  });

  it('should if only the first argument and is an object, expect the number 1 and the object', () => {
    const { length, data } = resolveArgs(overrides);

    expect(length).toBe(1);
    expect(data).toMatchObject({ a: 'A', b: 'B' });
  });
});
