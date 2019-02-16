import { factory } from '../index';
import { IFactoryObject } from '../types';

describe('make tests', () => {
  const Factory: IFactoryObject = factory(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  it('should make a single object', () => {
    const data = Factory.make();

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
    expect(typeof data[0]).toBe('object');
    expect(data[0]).toHaveProperty('name');
    expect(typeof data[0].name).toBe('string');
    expect(data[0]).toHaveProperty('email');
    expect(typeof data[0].email).toBe('string');
  });

  it('should make a single object with overriten data', () => {
    const data = Factory.make({ name: 'JOHN DOE' });

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
    const data = Factory.make(3);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(3);
  });

  it('should make a given number of objects with overriten data', () => {
    const data = Factory.make(3, { name: 'JOHN DOE' });

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(3);
    data.forEach(item => {
      expect(item.name).toBe('JOHN DOE');
    });
  });

  it('should make a single object if count is 0', () => {
    const data = Factory.make(0);

    expect(data.length).toBe(1);
  });

  it('should make a single object if count is negative', () => {
    const data = Factory.make(-3);

    expect(data.length).toBe(1);
  });
});
