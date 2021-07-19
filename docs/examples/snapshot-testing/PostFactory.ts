import { factory } from '../../../src/index';

const PostFactory = factory(fake => ({
  id: fake.datatype.uuid(),
  title: fake.lorem.sentence(),
}));

export default PostFactory;
