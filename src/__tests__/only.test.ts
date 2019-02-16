import { factory } from '../index';
import { IFactoryObject } from '../types';

describe('only tests', () => {
  const Factory: IFactoryObject = factory(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  it('should return only a given field', () => {
    const data = Factory.only('email');

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('name');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should return only certain fields', () => {
    const data = Factory.only(['email']);

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('name');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should return only certain fields with overriten data', () => {
    const data = Factory.only(['email'], { email: 'john@example.com' });

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('name');
    expect(data).toHaveProperty('email');
    expect(data.email).toBe('john@example.com');
  });
});
