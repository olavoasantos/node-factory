import { factory } from '..';

describe('only tests', () => {
  interface UserType {
    email: string;
    name: string;
  }

  const User = factory<UserType>(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  it('should return only a given field', () => {
    const data = User.only('email');

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('name');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should return only certain fields', () => {
    const data = User.only(['email']);

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('name');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should return only certain fields with overwritten data', () => {
    const data = User.only(['email'], { email: 'john@example.com' });

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('name');
    expect(data).toHaveProperty('email');
    expect(data.email).toBe('john@example.com');
  });

  it('should return only certain fields with overwritten data', () => {
    const data = User.only(['name'], () => ({
      name: 'OVERWRITTEN',
    }));

    expect(typeof data).toBe('object');
    expect(data).not.toHaveProperty('email');
    expect(data).toHaveProperty('name');
    expect(data.name).toBe('OVERWRITTEN');
  });
});
