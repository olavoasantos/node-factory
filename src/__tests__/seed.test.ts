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
    const data1 = Factory.seed(123).make();
    const data2 = Factory.seed(123).make();
    const data3 = Factory.make();

    expect(data1).toMatchObject(data2);
    expect(data1).not.toMatchObject(data3);
  });

  it('should not return the same values when making multiple models', () => {
    const data1 = Factory.seed(123).make(2);

    expect(data1[0]).not.toMatchObject(data1[1]);
  });

  it('should return the same values when calling make with multiple models', () => {
    const data1 = Factory.seed(123).make(2);
    const data2 = Factory.seed(123).make(2);

    expect(data1).toMatchObject(data2);
  });

  it('should return the same values when using create', async () => {
    const data1 = await Factory.seed(123).create(2);
    const data2 = await Factory.seed(123).create(2);

    expect(data1).toMatchObject(data2);
  });

  it('should not return the same values when calling make on a following call without seed', () => {
    const data1 = Factory.seed(123).make();
    const data2 = Factory.make();

    expect(data1).not.toMatchObject(data2);
  });
});
