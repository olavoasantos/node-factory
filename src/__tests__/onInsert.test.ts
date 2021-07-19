import { factory } from '..';

describe('onInsert tests', () => {
  interface UserType {
    email: string;
    name: string;
  }

  const User = factory<UserType>((fake) => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  const onInsert = jest.fn();

  beforeEach(() => {
    User.onInsert(onInsert);
  });

  afterEach(() => {
    onInsert.mockClear();
  });

  it('should call the onInsert function when creating a model', async () => {
    await User.create();

    expect(onInsert).toHaveBeenCalled();
  });

  it('should call the onInsert function when creating each model', async () => {
    await User.create(2);

    expect(onInsert).toHaveBeenCalledTimes(2);
  });

  it('should NOT call the onInsert function when making a model', async () => {
    User.make();

    expect(onInsert).not.toHaveBeenCalled();
  });
});
