import { factory } from '..';

describe('factory tests', () => {
  interface FactoryType {
    email: string;
    name: string;
  }

  const Factory = factory<FactoryType>(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  it('should create a factory', () => {
    expect(Factory.make).toBeDefined();
    expect(Factory.only).toBeDefined();
    expect(Factory.seed).toBeDefined();
    expect(Factory.create).toBeDefined();
  });
});
