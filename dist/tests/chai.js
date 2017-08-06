'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expect = undefined;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiJsonPattern = require('chai-json-pattern');

var _chaiJsonPattern2 = _interopRequireDefault(_chaiJsonPattern);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiJsonPattern2.default);

exports.expect = _chai.expect;