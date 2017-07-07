'use strict';

var _cucumber = require('cucumber');

function CustomWorld(callback) {
  // A custom world placeholder function
  return callback;
}

(0, _cucumber.defineSupportCode)(function ({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});