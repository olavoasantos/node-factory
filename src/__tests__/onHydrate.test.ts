import { factory } from '..';

describe('onHydrate tests', () => {
  interface UserType {
    email: string;
    name: string;
  }

  class UserModel {
    public name: string;
    public email: string;
    constructor(data: UserType) {
      this.name = data.name;
      this.email = data.email;
    }
  }

  const User = factory<UserType>(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  const onHydrate = jest.fn();

  beforeEach(() => {
    User.onHydrate(onHydrate);
  });

  afterEach(() => {
    onHydrate.mockClear();
  });

  it('should call the onHydrate function when creating a model', async () => {
    await User.create();

    expect(onHydrate).toHaveBeenCalled();
  });

  it('should call the onHydrate function when creating each model', async () => {
    await User.create(2);

    expect(onHydrate).toHaveBeenCalledTimes(2);
  });

  it('should call the onHydrate function when making a model', async () => {
    User.make();

    expect(onHydrate).toHaveBeenCalled();
  });

  it('should call the onHydrate function when making each model', async () => {
    User.make(2);

    expect(onHydrate).toHaveBeenCalledTimes(2);
  });

  it('should hydrate the result when making data', () => {
    User.onHydrate((data: UserType) => {
      return new UserModel(data);
    });

    const factoryModel = User.make();

    expect(factoryModel.constructor.name).toBe('UserModel');
  });

  it('should hydrate the result when creating data', async () => {
    User.onHydrate((data: UserType) => {
      return new UserModel(data);
    });

    const factoryModel = await User.create();

    expect(factoryModel.constructor.name).toBe('UserModel');
  });
});
