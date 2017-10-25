import { expect } from '../../tests/chai';

/**
 * json should match pattern {pattern}
 * @param {string} pattern Json in string to match
 * @return {Boolean} validates if expectation is fulfilled
 */
export default function(pattern) {
  return expect(this.lastResponse.body).to.matchPattern(pattern);
}
