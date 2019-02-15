import { factory } from '../index';
import { IFactoryObject } from '../types';

describe('factory tests', () => {
  let Factory: IFactoryObject;
  beforeEach(() => {
    Factory = factory(fake => ({
      email: fake.internet.email(),
      name: fake.name.firstName(),
    }));
  });

  it('should create a factory', () => {
    expect(Factory.make).toBeDefined();
    expect(Factory.only).toBeDefined();
    expect(Factory.seed).toBeDefined();
    expect(Factory.create).toBeDefined();
  });

  describe('create tests', () => {
    it('should create a single object', () => {
      const data = Factory.create();

      expect(typeof data).toBe('object');
      expect(data).toHaveProperty('name');
      expect(typeof data.name).toBe('string');
      expect(data).toHaveProperty('email');
      expect(typeof data.email).toBe('string');
    });

    it('should create a single object with overitten data', () => {
      const data = Factory.create({ name: 'JOHN DOE' });

      expect(typeof data).toBe('object');
      expect(data).toHaveProperty('name');
      expect(typeof data.name).toBe('string');
      expect(data.name).toBe('JOHN DOE');
      expect(data).toHaveProperty('email');
      expect(typeof data.email).toBe('string');
    });
  });

  describe('only tests', () => {
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

  describe('make tests', () => {
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
});
