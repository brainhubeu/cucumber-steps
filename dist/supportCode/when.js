'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ({ When }) {
  When('I send a {string} request to {stringInDoubleQuotes}', _sendRequestTo2.default);
  When('I send a {string} request to {stringInDoubleQuotes} with body:', _sendRequestToWithBody2.default);
};

var _sendRequestTo = require('../support/action/sendRequestTo');

var _sendRequestTo2 = _interopRequireDefault(_sendRequestTo);

var _sendRequestToWithBody = require('../support/action/sendRequestToWithBody');

var _sendRequestToWithBody2 = _interopRequireDefault(_sendRequestToWithBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }