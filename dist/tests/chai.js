'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expect = undefined;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiLike = require('chai-like');

var _chaiLike2 = _interopRequireDefault(_chaiLike);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _matcherPlugin = require('./matcherPlugin');

var _matcherPlugin2 = _interopRequireDefault(_matcherPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaiLike2.default);
_chaiLike2.default.extend(_matcherPlugin2.default);

exports.expect = _chai.expect;