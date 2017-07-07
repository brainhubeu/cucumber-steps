'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = undefined;

var _given = require('./supportCode/given');

var _given2 = _interopRequireDefault(_given);

var _when = require('./supportCode/when');

var _when2 = _interopRequireDefault(_when);

var _then = require('./supportCode/then');

var _then2 = _interopRequireDefault(_then);

var _Client = require('./Client');

var _Client2 = _interopRequireDefault(_Client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Client = _Client2.default;

exports.default = ({ Given, When, Then }) => {
  (0, _given2.default)({ Given });
  (0, _when2.default)({ When });
  (0, _then2.default)({ Then });
};