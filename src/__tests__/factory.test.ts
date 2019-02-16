import { factory } from '../index';
import { IFactoryObject } from '../types';

describe('factory tests', () => {
  const Factory: IFactoryObject = factory(fake => ({
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
