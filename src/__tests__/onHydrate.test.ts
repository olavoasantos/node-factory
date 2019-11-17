import { factory } from '..';

describe('onHydrate tests', () => {
  interface FactoryType {
    email: string;
    name: string;
  }

  class FactoryModel {
    public name: string;
    public email: string;
    constructor(data: FactoryType) {
      this.name = data.name;
      this.email = data.email;
    }
  }

  const Factory = factory<FactoryType>(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  const onHydrate = jest.fn();

  beforeEach(() => {
    Factory.onHydrate(onHydrate);
  });

  afterEach(() => {
    onHydrate.mockClear();
  });

  it('should call the onHydrate function when creating a model', async () => {
    await Factory.create();

    expect(onHydrate).toHaveBeenCalled();
  });

  it('should call the onHydrate function when creating each model', async () => {
    await Factory.create(2);

    expect(onHydrate).toHaveBeenCalledTimes(2);
  });

  it('should call the onHydrate function when making a model', async () => {
    Factory.make();

    expect(onHydrate).toHaveBeenCalled();
  });

  it('should call the onHydrate function when making each model', async () => {
    Factory.make(2);

    expect(onHydrate).toHaveBeenCalledTimes(2);
  });

  it('should hydrate the result when making data', () => {
    Factory.onHydrate((data: FactoryType) => {
      return new FactoryModel(data);
    });

    const factoryModel = Factory.make();

    expect(factoryModel.constructor.name).toBe('FactoryModel');
  });

  it('should hydrate the result when creating data', async () => {
    Factory.onHydrate((data: FactoryType) => {
      return new FactoryModel(data);
    });

    const factoryModel = await Factory.create();

    expect(factoryModel.constructor.name).toBe('FactoryModel');
  });
});
