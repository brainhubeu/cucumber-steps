'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Response = require('./Response');

var _Response2 = _interopRequireDefault(_Response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'del'
};

class Client {
  constructor(superagent) {
    this.superagent = superagent;
    this.headers = {};

    Object.keys(METHOD).forEach(methodKey => {
      const method = METHOD[methodKey];
      this[methodKey.toLowerCase()] = (path, body) => {
        return this.createRequest(method, path, body);
      };
    });
  }

  setHost(host) {
    this.host = host;
  }

  createRequest(method, path, body) {
    const request = this.superagent[method.toLowerCase()](this.host + path);

    this.addRequestHeaders(request);

    const createdRequest = method.toLowerCase() !== 'get' ? request.send(body) : request;

    return createdRequest.then(({ body, status }) => new _Response2.default(body, status)).catch(({ response: { body }, status }) => new _Response2.default(body, status));
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