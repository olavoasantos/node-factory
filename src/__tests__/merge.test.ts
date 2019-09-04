import { merge } from '../index';

describe('seed tests', () => {
  const object1 = { a: 'A', b: 'B' };
  const object2 = { c: 'C', d: { e: 'E' } };
  const object3 = { f: 'F', g: { f: 'F' } };
  const object4 = { b: 'H', e: 'I', f: 'J' };
  const object5 = { k: 'K', l: ['m', 'n'] };
  const object6 = { k: 'O', l: ['p', 'n'] };

  it('should merge the object', () => {
    const merged = merge(object1, object4);

    expect(merged).toMatchObject({ a: 'A', b: 'H' });
  });

  it('should merge values in nested object', () => {
    const merged = merge(object2, object4);

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
});
