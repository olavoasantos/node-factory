import { resolveArgs } from '../helpers';

describe('resolveArgs tests', () => {
  const count = 5;
  const overrides = { a: 'A', b: 'B' };
  const generator = () => ({ a: 'A', b: 'B' });

  it('should expect the number and the object if the first arg is a number and second an object', () => {
    const { length, data } = resolveArgs(count, overrides);

    expect(length).toBe(5);
    expect(data).toMatchObject({ a: 'A', b: 'B' });
  });

  it('should expect the number and an empty object if only the first argument is passed and is a number', () => {
    const { length, data } = resolveArgs(count);

    expect(length).toBe(5);
    expect(data).toMatchObject({});
  });

  it('should expect the number 1 and the object if only the first argument is passed and is an object', () => {
    const { length, data } = resolveArgs(overrides);

    expect(length).toBe(1);
    expect(data).toMatchObject({ a: 'A', b: 'B' });
  });

  it('should expect the number 1 and the generator response if only the first argument passed and is a function', () => {
    const { length, data } = resolveArgs(generator);

    expect(length).toBe(1);
    expect(data).toMatchObject({ a: 'A', b: 'B' });
  });

  it('should expect the number and the generator response if the first arg is a number and second a function', () => {
    const { length, data } = resolveArgs(count, generator);

    expect(length).toBe(5);
    expect(data).toMatchObject({ a: 'A', b: 'B' });
  });
});
