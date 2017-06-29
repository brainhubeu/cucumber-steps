'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ({ Then }) {
  Then('the response code should be {int}', _responseCodeShouldBe2.default);
  Then('the JSON should match pattern', _jsonShouldMatchPattern2.default);
};

var _responseCodeShouldBe = require('../../features/support/check/responseCodeShouldBe');

var _responseCodeShouldBe2 = _interopRequireDefault(_responseCodeShouldBe);

var _jsonShouldMatchPattern = require('../../features/support/check/jsonShouldMatchPattern');

var _jsonShouldMatchPattern2 = _interopRequireDefault(_jsonShouldMatchPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }