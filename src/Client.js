import Response from './Response';

const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'del',
};

export default class Client {
  constructor(superagent) {
    this.superagent = superagent;
    this.headers = {};

    Object.keys(METHOD).forEach(methodKey => {
      const method = METHOD[methodKey];
      this[methodKey.toLowerCase()] = (path, body) => this.createRequest(method, path, body);
    });
  }

  setHost(host) {
    this.host = host;
  }

  createRequest(method, path, body) {
    const request = this.superagent[method.toLowerCase()](this.host + path);

    this.addRequestHeaders(request);

    const createdRequest = method.toLowerCase() !== 'get'
      ? request.send(body)
      : request;

    return createdRequest
      .then(
        ({ body, status }) => new Response(body, status),
        ({ response: { body, status } }) => new Response(body, status),
      );
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
