import Response from './Response';

export default class Client {
  constructor(superagent) {
    this.superagent = superagent;
    this.headers = {};
  }

  setHost(host) {
    this.host = host;
  }

  get(path) {
    const request = this.superagent
      .get(this.host + path);

    this.addRequestHeaders(request);

    return request
      .then(({ body, status }) => new Response(body, status));
  }

  post(path, body) {
    const request = this.superagent
      .post(this.host + path);

    this.addRequestHeaders(request);

    return request.send(body)
      .then(({ body, status }) => new Response(body, status));
  }

  addRequestHeaders(request) {
    Object.keys(this.headers).map((name) => {
      request.set(name, this.headers[name]);
    });
  }

  setHeader(name, value) {
    this.headers[name] = value;
  }
}
