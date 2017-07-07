"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  return this.client.setHeader(name, value);
};