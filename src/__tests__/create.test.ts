import { factory } from '..';

describe('create tests', () => {
  interface FactoryType {
    id?: number;
    email: string;
    name: string;
  }

  const User = factory<FactoryType>(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  })).onInsert(async (data: FactoryType) => ({ id: 1, ...data }));

  it('should create a single object', async () => {
    const data = await User.create();

    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('name');
    expect(typeof data.name).toBe('string');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should create a single object and return OnInsertMethod response', async () => {
    const data = await User.create();

    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('id');
    expect(typeof data.id).toBe('number');
    expect(data).toHaveProperty('name');
    expect(typeof data.name).toBe('string');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should create a single object with overwritten data', async () => {
    const data = await User.create({ name: 'JOHN DOE' });

    expect(typeof data).toBe('object');
    expect(data).toHaveProperty('name');
    expect(typeof data.name).toBe('string');
    expect(data.name).toBe('JOHN DOE');
    expect(data).toHaveProperty('email');
    expect(typeof data.email).toBe('string');
  });

  it('should create an array factory', async () => {
    const arrayFactory = factory<string[]>(fake => [fake.name.findName(), fake.name.findName(), fake.name.findName()]);

    const created = await arrayFactory.create();

    expect(Array.isArray(created)).toBeTruthy();
  });

  it('should make a single object', async () => {
    const data = await User.create(1);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
    expect(typeof data[0]).toBe('object');
    expect(data[0]).toHaveProperty('name');
    expect(typeof data[0].name).toBe('string');
    expect(data[0]).toHaveProperty('email');
    expect(typeof data[0].email).toBe('string');
  });

  it('should make a single object with overwritten data', async () => {
    const data = await User.create(1, { name: 'JOHN DOE' });

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
    expect(typeof data[0]).toBe('object');
    expect(data[0]).toHaveProperty('name');
    expect(typeof data[0].name).toBe('string');
    expect(data[0].name).toBe('JOHN DOE');
    expect(data[0]).toHaveProperty('email');
    expect(typeof data[0].email).toBe('string');
  });

  it('should make a given number of objects', async () => {
    const data = await User.create(3);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(3);
  });

  it('should make a given number of objects with overwritten data', async () => {
    const data = await User.create(3, { name: 'JOHN DOE' });

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(3);
    data.forEach(item => {
      expect(item.name).toBe('JOHN DOE');
    });
  });

  it('should make a single object if count is 0', async () => {
    const data = await User.create(0);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
  });

  it('should make a single object if count is negative', async () => {
    const data = await User.create(-3);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(1);
  });

  it('should accept overrides as a function', async () => {
    const data = await User.create(() => ({
      name: 'OVERWRITTEN',
    }));

    expect(data.name).toBe('OVERWRITTEN');
  });

  it('should accept overrides as a function as second argument', async () => {
    const [data] = await User.create(1, () => ({
      name: 'OVERWRITTEN',
    }));

    expect(data.name).toBe('OVERWRITTEN');
  });
});
