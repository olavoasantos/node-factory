// tslint:disable
import { factory } from '../../src/index';

export const UserFactory = factory(fake => ({
  id: fake.random.uuid(),
  name: fake.name.findName(),
  email: fake.internet.email(),
}));
