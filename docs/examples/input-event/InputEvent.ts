import { factory } from '../../../src/index';

const InputEvent = factory(fake => ({
  target: {
    value: fake.random.uuid(),
  }
})).create;

export default InputEvent;
