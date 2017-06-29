import { expect } from '../../../tests/chai';
const INDENT = '    ';

/**
 * json should match pattern {pattern}
 * @param {string} pattern Json in string to match
 * @returns {Promise}
 */
export default function (pattern) {
  const json = JSON.parse(pattern);
  const message = `Expect response body to match pattern:
  ${pattern}
  but the response body is: 
  ${JSON.stringify(this.lastResponse.body, null, INDENT)}
  `;

  return expect(this.lastResponse.body, message).to.be.like(json);
};
