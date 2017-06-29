"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  return this.client.setHeader(name, value);
};

; /**
   * set header {name} with value {value}
   * @param {string} name header name
   * @param {string} value header value
   * @returns {Promise}
   */