'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Response = require('./Response');

var _Response2 = _interopRequireDefault(_Response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Client {
  constructor(superagent) {
    this.superagent = superagent;
    this.headers = {};
  }

  setHost(host) {
    this.host = host;
  }

  get(path) {
    const request = this.superagent.get(this.host + path);

    this.addRequestHeaders(request);

    return request.then(({ body, status }) => new _Response2.default(body, status));
  }

  post(path, body) {
    const request = this.superagent.post(this.host + path);

    this.addRequestHeaders(request);

    return request.send(body).then(({ body, status }) => new _Response2.default(body, status));
  }

  addRequestHeaders(request) {
    Object.keys(this.headers).map(name => {
      request.set(name, this.headers[name]);
    });
  }

  setHeader(name, value) {
    this.headers[name] = value;
  }
}
exports.default = Client;