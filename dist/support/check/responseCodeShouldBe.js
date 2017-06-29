'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (statusCode) {
  const message = `Expected response status to be equal ${statusCode}, but got ${this.lastResponse.status}`;

  return (0, _chai.expect)(this.lastResponse.status, message).to.be.equal(statusCode);
};

var _chai = require('../../tests/chai');

;

/**
 * response status code should be {statusCode}
 * @param {number} statusCode
 * @returns {Promise}
 */