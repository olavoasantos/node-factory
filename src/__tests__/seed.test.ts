import { factory } from '../index';

describe('seed tests', () => {
  interface FactoryType {
    email: string;
    name: string;
  }

  const Factory = factory<FactoryType>(fake => ({
    email: fake.internet.email(),
    name: fake.name.firstName(),
  }));

  it('should return the same values', () => {
    const data1 = Factory.seed(123).create();
    const data2 = Factory.seed(123).create();
    const data3 = Factory.create();

    expect(data1).toMatchObject(data2);
    expect(data1).not.toMatchObject(data3);
  });

  it('should return the same values when using make', async () => {
    const data1 = await Factory.seed(123).make(2);
    const data2 = await Factory.seed(123).make(2);

    expect(data1[0]).toMatchObject(data2[0]);
    expect(data1[1]).toMatchObject(data2[1]);
  });
});
