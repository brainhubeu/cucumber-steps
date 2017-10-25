'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pattern) {
  // const message = `Expect response body to match pattern:
  // ${pattern}
  // but the response body is: 
  // ${JSON.stringify(this.lastResponse.body, null, INDENT)}
  // `;

  return (0, _chai.expect)(this.lastResponse.body).to.matchPattern(pattern);
};

var _chai = require('../../tests/chai');

const INDENT = '    ';

/**
 * json should match pattern {pattern}
 * @param {string} pattern Json in string to match
 * @return {Boolean} validates if expectation is fulfilled
 */