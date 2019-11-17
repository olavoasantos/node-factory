import { factory } from '..';

describe('onInsert tests', () => {
  interface FactoryType {
    email: string;
    name: string;
  }

  const Factory = factory<FactoryType>(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  const onInsert = jest.fn();

  beforeEach(() => {
    Factory.onInsert(onInsert);
  });

  afterEach(() => {
    onInsert.mockClear();
  });

  it('should call the onInsert function when creating a model', async () => {
    await Factory.create();

    expect(onInsert).toHaveBeenCalled();
  });

  it('should call the onInsert function when creating each model', async () => {
    await Factory.create(2);

    expect(onInsert).toHaveBeenCalledTimes(2);
  });

  it('should NOT call the onInsert function when making a model', async () => {
    Factory.make();

    expect(onInsert).not.toHaveBeenCalled();
  });
});
