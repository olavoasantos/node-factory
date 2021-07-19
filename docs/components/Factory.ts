// tslint:disable
import { factory, StateGenerator } from '../../src/index';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserStates {
  female: StateGenerator<User>;
  male: StateGenerator<User>;
}

export const UserFactory = factory<User, UserStates>(fake => ({
  id: fake.datatype.uuid(),
  name: fake.name.findName(),
  email: fake.internet.email(),
}));

UserFactory.state('female', {
  name: 'Joan Doe',
});

UserFactory.state('male', {
  name: 'John Doe',
});
