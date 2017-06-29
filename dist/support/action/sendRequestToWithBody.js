"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (method, path, requestBody) {
  let body;
  try {
    body = JSON.parse(requestBody);
  } catch (error) {
    body = requestBody;
  }

  return this.client[method.toLowerCase()](path, body).then(response => {
    this.lastResponse = response;
    return this.lastResponse;
  });
};