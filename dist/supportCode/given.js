'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ({ Given }) {
  Given('I set header {string} with value {string}', _setHeaderWithValue2.default);
};

var _setHeaderWithValue = require('../support/action/setHeaderWithValue');

var _setHeaderWithValue2 = _interopRequireDefault(_setHeaderWithValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }