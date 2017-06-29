"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (method, path, string) {
  let body;
  try {
    body = JSON.parse(string);
  } catch (error) {
    body = string;
  }

  return this.client[method.toLowerCase()](path, body).then(response => this.lastResponse = response);
};

; /**
   * Send {method} request to {path} with body
   * @param {string} method method to perform
   * @param {string} path url path to call
   * @returns {Promise}
   */