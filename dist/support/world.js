'use strict';

var _cucumber = require('cucumber');

var _webdriverio = require('webdriverio');

function CustomWorld(callback) {}

(0, _cucumber.defineSupportCode)(function ({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});