import like from 'chai-like';
import matchers from './matchers';

export default like.extend({
  match(object, expected) {
    const validType = typeof object === 'string' || typeof object === 'number';

    return validType && Object.keys(matchers).includes(expected);
  },
  assert(object, expected) {
    return matchers[expected](object);
  },
});
