"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (method, path) {
  return this.client[method.toLowerCase()](path).then(response => this.lastResponse = response);
};

; /**
   * Send {method} request to {path}
   * @param {string} method method to perform
   * @param {string} path url path to call
   * @returns {Promise}
   */