'use strict';

var _cucumber = require('cucumber');

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _Client = require('../../../src/Client');

var _Client2 = _interopRequireDefault(_Client);

var _mock = require('../../tests/mock');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _cucumber.defineSupportCode)(function ({ After, Before }) {
  Before(function (scenarioResult) {
    const world = this;
    world.application = _mock2.default;

    return world.application.then(listener => {
      world.client = new _Client2.default(_superagent2.default);
      world.client.setHost('http://localhost:' + listener.address().port);
    });
  });

  After(function () {});
});