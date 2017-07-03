import { expect } from '../../tests/chai';

/**
 * response status code should be {statusCode}
 * @param {number} statusCode
 * @return {Boolean} returns truth about status code expectation
 */
export default function(statusCode) {
  const message = `Expected response status to be equal ${statusCode}, but got ${this.lastResponse.status}`;

  return expect(this.lastResponse.status, message).to.be.equal(statusCode);
}
