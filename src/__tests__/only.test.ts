import { factory } from '../index';

describe('only tests', () => {
  interface FactoryType {
    email: string;
    name: string;
  }

  const Factory = factory<FactoryType>(fake => ({
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

  it('should return only certain fields with overwritten data', () => {
    const data = Factory.only(['email'], { email: 'john@example.com' });

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('name');
    expect(data).toHaveProperty('email');
    expect(data.email).toBe('john@example.com');
  });

  it('should return only certain fields with overwritten data', () => {
    const data = Factory.only(['name'], () => ({
      name: 'OVERWRITTEN',
    }));

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('email');
    expect(data).toHaveProperty('name');
    expect(data.name).toBe('OVERWRITTEN');
  });
});
