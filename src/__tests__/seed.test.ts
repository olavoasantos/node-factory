import { factory } from '../index';
import { IFactoryObject } from '../types';

describe('seed tests', () => {
  const Factory: IFactoryObject = factory(fake => ({
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

  it('should return the same values when using make', () => {
    const data1 = Factory.seed(123).make(2);
    const data2 = Factory.seed(123).make(2);

    expect(data1[0]).toMatchObject(data2[0]);
    expect(data1[1]).toMatchObject(data2[1]);
  });
});
