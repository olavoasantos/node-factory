import { factory } from '../index';
import { IFactoryObject } from '../types';

describe('create tests', () => {
  const Factory: IFactoryObject = factory(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  it('should create a single object', () => {
    const data = Factory.create();

    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('name');
    expect(typeof data.name).toBe('string');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should create a single object with overwritten data', () => {
    const data = Factory.create({ name: 'JOHN DOE' });

    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('name');
    expect(typeof data.name).toBe('string');
    expect(data.name).toBe('JOHN DOE');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should create an array factory', () => {
    const arrayFactory = factory(fake => [
      fake.name.findName(),
      fake.name.findName(),
      fake.name.findName(),
    ]);

    const created = arrayFactory.create();

    expect(Array.isArray(created)).toBeTruthy();
  });
});
