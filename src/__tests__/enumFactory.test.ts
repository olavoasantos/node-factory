import { enumFactory } from '../index';

describe('factory tests', () => {
  type FactoryType = string;

  const Enum = ['SENT', 'RECEIVED', 'READ', 'DELETED'];
  const Factory = enumFactory<FactoryType>(Enum);

  it('should create a factory', () => {
    expect(Factory.get).toBeDefined();
    expect(Factory.unique).toBeDefined();
    expect(Factory.seed).toBeDefined();
  });

  it('should get a random value', () => {
    const value = Factory.get();

    expect(Enum.indexOf(value) > -1).toBeTruthy();
  });

  it('should get multiple random values', () => {
    const data = Factory.get(2);

    expect(data.length).toBe(2);
    data.forEach((value: FactoryType) => {
      expect(Enum.indexOf(value) > -1).toBeTruthy();
    });
  });

  it('should get an array with a single value', () => {
    expect(Factory.get(0).length).toBe(1);
    expect(Factory.get(-123).length).toBe(1);
  });

  it('should get unique values', () => {
    const data = Factory.unique(2);

    expect(data.length).toBe(2);
    const uniqueData = data.filter((value: FactoryType, index: number, self: FactoryType[]) => {
      return self.indexOf(value) === index;
    });
    expect(uniqueData.length).toBe(data.length);
  });

  it('should get a max of the Enum length of unique values', () => {
    const data = Factory.unique(Enum.length + 1);
    expect(data.length).toBe(Enum.length);
  });

  it('should return the same values when using get', async () => {
    const data1 = Factory.seed(123).get(2);
    const data2 = Factory.seed(123).get(2);

    expect(data1).toMatchObject(data2);
  });

  it('should return the same values when using unique', async () => {
    const data1 = Factory.seed(123).unique(2);
    const data2 = Factory.seed(123).unique(2);

    expect(data1).toMatchObject(data2);
  });

  it('should accept a callback', () => {
    const CallbackFactory = enumFactory<string>(
      (fake: Faker.FakerStatic) => fake.name.firstName()
    );

    const data = CallbackFactory.get(3);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(3);
    data.forEach((item: any) => {
      expect(typeof item).toBe('string');
    })
  });
});
