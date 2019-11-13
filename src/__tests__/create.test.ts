import { factory } from '../index';

describe('create tests', () => {
  interface FactoryType {
    email: string;
    name: string;
  }

  const Factory = factory<FactoryType>(fake => ({
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
    const arrayFactory = factory<string[]>(fake => [fake.name.findName(), fake.name.findName(), fake.name.findName()]);

    const created = arrayFactory.create();

    expect(Array.isArray(created)).toBeTruthy();
  });

  it('should make a single object', () => {
    const data = Factory.create(1);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
    expect(typeof data[0]).toBe('object');
    expect(data[0]).toHaveProperty('name');
    expect(typeof data[0].name).toBe('string');
    expect(data[0]).toHaveProperty('email');
    expect(typeof data[0].email).toBe('string');
  });

  it('should make a single object with overriten data', () => {
    const data = Factory.create(1, { name: 'JOHN DOE' });

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
    expect(typeof data[0]).toBe('object');
    expect(data[0]).toHaveProperty('name');
    expect(typeof data[0].name).toBe('string');
    expect(data[0].name).toBe('JOHN DOE');
    expect(data[0]).toHaveProperty('email');
    expect(typeof data[0].email).toBe('string');
  });

  it('should make a given number of objects', () => {
    const data = Factory.create(3);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(3);
  });

  it('should make a given number of objects with overriten data', () => {
    const data = Factory.create(3, { name: 'JOHN DOE' });

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(3);
    data.forEach(item => {
      expect(item.name).toBe('JOHN DOE');
    });
  });

  it('should make a single object if count is 0', () => {
    const data = Factory.create(0);

    expect(Array.isArray(data)).toBeFalsy();
  });

  it('should make a single object if count is negative', () => {
    const data = Factory.create(-3);

    expect(Array.isArray(data)).toBeFalsy();
  });
});
