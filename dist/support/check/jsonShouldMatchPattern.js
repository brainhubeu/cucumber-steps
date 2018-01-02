'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pattern) {
  return (0, _chai.expect)(this.lastResponse.body).to.matchPattern(pattern);
};

var _chai = require('../../tests/chai');