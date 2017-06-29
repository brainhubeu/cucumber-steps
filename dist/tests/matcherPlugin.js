'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chaiLike = require('chai-like');

var _chaiLike2 = _interopRequireDefault(_chaiLike);

var _matchers = require('./matchers');

var _matchers2 = _interopRequireDefault(_matchers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _chaiLike2.default.extend({
  match(object, expected) {
    const validType = typeof object === 'string' || typeof object === 'number';

    return validType && Object.keys(_matchers2.default).includes(expected);
  },
  assert(object, expected) {
    return _matchers2.default[expected](object);
  }
});