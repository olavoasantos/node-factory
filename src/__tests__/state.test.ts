import { factory } from '..';
import { Factory, MakeMethod } from '../types';

describe('state tests', () => {
  interface UserType {
    email: string;
    name: string;
  }

  interface UserState {
    female: MakeMethod<UserType>;
  }

  let User: Factory<UserType> & UserState;
  beforeEach(() => {
    User = factory<UserType, UserState>((fake) => ({
      email: fake.internet.email(),
      name: fake.name.firstName(),
    }));
  });

  it('should have a state defined', () => {
    const name = 'Joan';
    User.state('female', { name });

    expect(User.female).toBeDefined();
  });

  it('should make a single object of a given state', () => {
    const name = 'Joan';
    User.state('female', { name });

    const data = User.female();

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
    User.state('female', { name });

    const data = User.female({ email });

    expect(data.name).toBe(name);
    expect(data.email).toBe(email);
  });

  it('should make a single object of a given state', () => {
    const name = 'Joan';
    User.state('female', { name });

    const data = User.female(1);

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
    User.state('female', { name });

    const data = User.female(1, { email });

    expect(data[0].name).toBe(name);
    expect(data[0].email).toBe(email);
  });

  it('should make a single object of a given state if count is 0', () => {
    const name = 'Joan';
    User.state('female', { name });

    const data = User.female(0);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
  });

  it('should make a single object of a given state if count is negative', () => {
    const name = 'Joan';
    User.state('female', { name });

    const data = User.female(-3);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
  });

  it('should accept overrides as a function to make a given state', () => {
    User.state('female', () => ({
      name: 'OVERWRITTEN',
    }));

    const data = User.female();

    expect(data.name).toBe('OVERWRITTEN');
  });

  it('should accept overrides as a function as second argument when making a given state', () => {
    User.state('female', () => ({
      name: 'OVERWRITTEN',
    }));

    const [data] = User.female(1);

    expect(data.name).toBe('OVERWRITTEN');
  });
});
