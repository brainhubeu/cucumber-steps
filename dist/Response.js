"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Response {
  constructor(body, status) {
    this.body = body;
    this.status = status;
  }
}
exports.default = Response;