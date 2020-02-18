import { merge } from '../helpers';

describe('seed tests', () => {
  const object1 = { a: 'A', b: 'B' };
  const object3 = { f: 'F', g: { f: 'F' } };
  const object4 = { b: 'H', e: 'I', f: 'J' };
  const object5 = { k: 'K', l: ['m', 'n'] };
  const object6 = { k: 'O', l: ['p', 'n'] };

  it('should merge the object', () => {
    const merged = merge(object1, object4);

    expect(merged).toMatchObject({ a: 'A', b: 'H' });
  });

  it('should merge values in nested object', () => {
    const merged = merge({ c: 'C', d: { e: 'E' } }, { d: { e: 'I' } });

    expect(merged).toMatchObject({ c: 'C', d: { e: 'I' } });
  });

  it('should only merge the first match', () => {
    const merged = merge(object3, object4);

    expect(merged).toMatchObject({ f: 'J', g: { f: 'F' } });
  });

  it('should not transform array into object', () => {
    const merged = merge(object5, object6);

    expect(merged).toMatchObject({ k: 'O', l: ['p', 'n'] });
  });

  it('should set the value to undefined', () => {
    const merged = merge(object1, { a: undefined });

    expect(merged).toMatchObject({ a: undefined, b: 'B' });
  });

  it('should merge two arrays', () => {
    const merged = merge([1, 2, 3], [4, 5]);

    expect(merged).toMatchObject([4, 5, 3]);
  });

  it('should merge items from even if the target does not contain that key', () => {
    const merged = merge({ variable: { a: 'B' } }, { variable: { c: 'D' } });

    expect(merged).toMatchObject({ variable: { a: 'B', c: 'D' } });
  });

  it('should NOT clone instances', () => {
    class CustomClass {};
    const merged = merge({ a: new CustomClass() }, {});

    expect(merged.a).toBeInstanceOf(CustomClass);
  });

  it('should NOT merge arrays inside objects', () => {
    const merged = merge({ array: [1, 2, 3] }, { array: [4, 5] });

    expect(merged).toMatchObject({ array: [4, 5] });
  });
});
