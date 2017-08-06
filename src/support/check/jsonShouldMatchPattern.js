import { expect } from '../../tests/chai';
const INDENT = '    ';

/**
 * json should match pattern {pattern}
 * @param {string} pattern Json in string to match
 * @return {Boolean} validates if expectation is fulfilled
 */
export default function(pattern) {
  // const message = `Expect response body to match pattern:
  // ${pattern}
  // but the response body is: 
  // ${JSON.stringify(this.lastResponse.body, null, INDENT)}
  // `;

  return expect(this.lastResponse.body).to.matchPattern(pattern);
}
