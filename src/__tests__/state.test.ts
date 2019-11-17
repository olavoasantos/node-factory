import { factory } from '../index';
import { IFactoryObject, StateGenerator } from '../types';

describe('state tests', () => {
  interface FactoryType {
    email: string;
    name: string;
  }

  interface FactoryState {
    female: StateGenerator<FactoryType>;
  }

  let Factory: IFactoryObject<FactoryType> & FactoryState;
  beforeEach(() => {
    Factory = factory<FactoryType, FactoryState>(fake => ({
      email: fake.internet.email(),
      name: fake.name.firstName(),
    }));
  });

  it('should have a state defined', () => {
    const name = 'Joan';
    Factory.state('female', { name });

    expect(Factory.female).toBeDefined();
  });

  it('should make a single object of a given state', () => {
    const name = 'Joan';
    Factory.state('female', { name });

    const data = Factory.female();

    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('name');
    expect(typeof data.name).toBe('string');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
    expect(data.name).toBe(name);
  });

  it('should make a single object with overwritten data of a given state', () => {
    const name = 'Joan';
    const email = 'joan@email.com';
    Factory.state('female', { name });

    const data = Factory.female({ email });

    expect(data.name).toBe(name);
    expect(data.email).toBe(email);
  });

  it('should make a single object of a given state', () => {
    const name = 'Joan';
    Factory.state('female', { name });

    const data = Factory.female(1);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
    expect(typeof data[0]).toBe('object');
    expect(data[0]).toHaveProperty('name');
    expect(typeof data[0].name).toBe('string');
    expect(data[0]).toHaveProperty('email');
    expect(typeof data[0].email).toBe('string');
    expect(data[0].name).toBe(name);
  });

  it('should make a single object with overwritten data of a given state', () => {
    const name = 'Joan';
    const email = 'joan@email.com';
    Factory.state('female', { name });

    const data = Factory.female(1, { email });

    expect(data[0].name).toBe(name);
    expect(data[0].email).toBe(email);
  });

  it('should make a single object of a given state if count is 0', () => {
    const name = 'Joan';
    Factory.state('female', { name });

    const data = Factory.female(0);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
  });

  it('should make a single object of a given state if count is negative', () => {
    const name = 'Joan';
    Factory.state('female', { name });

    const data = Factory.female(-3);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
  });

  it('should accept overrides as a function to make a given state', () => {
    Factory.state('female', () => ({
      name: 'OVERWRITTEN',
    }));

    const data = Factory.female();

    expect(data.name).toBe('OVERWRITTEN');
  });

  it('should accept overrides as a function as second argument when making a given state', () => {
    Factory.state('female', () => ({
      name: 'OVERWRITTEN',
    }));

    const [data] = Factory.female(1);

    expect(data.name).toBe('OVERWRITTEN');
  });
});
