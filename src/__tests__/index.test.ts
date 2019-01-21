import { greeter } from '../index';

describe('greeter tests', (): void => {
  it('should greet with the persons name', (): void => {
    const name: string = 'John Doe';

    expect(greeter(name)).toBe('Hello, John Doe');
  });
});
