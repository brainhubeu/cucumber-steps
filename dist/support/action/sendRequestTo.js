"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (method, path) {
  return this.client[method.toLowerCase()](path).then(response => {
    this.lastResponse = response;
    return this.lastResponse;
  });
};