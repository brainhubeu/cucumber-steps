'use strict';

var _Client = require('./Client');

var _Client2 = _interopRequireDefault(_Client);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chai = require('../tests/chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Client', () => {
  it('makes a GET request', () => {
    const superagent = {
      get: _sinon2.default.stub()
    };
    superagent.get.withArgs('http://example.com/custom-path').returns(Promise.resolve({
      body: {
        property: 'value'
      },
      status: 200
    }));

    const client = new _Client2.default(superagent);
    client.setHost('http://example.com');

    return client.get('/custom-path').then(response => {
      (0, _chai.expect)(response.body).to.be.like({
        'property': 'value'
      });
      (0, _chai.expect)(response.status).to.be.equal(200);
    });
  });

  it('makes a POST request', () => {
    const body = {
      'property': 'value',
      'other': 'value'
    };
    const superagent = {
      post: _sinon2.default.stub()
    };
    const poster = {
      send: _sinon2.default.stub()
    };

    superagent.post.withArgs('http://example.com/custom-path').returns(poster);

    poster.send.withArgs(body).returns(Promise.resolve({
      body: {
        property: 'value'
      },
      status: 201
    }));

    const client = new _Client2.default(superagent);
    client.setHost('http://example.com');

    return client.post('/custom-path', body).then(response => {
      (0, _chai.expect)(response.body).to.be.like({
        'property': 'value'
      });
      (0, _chai.expect)(response.status).to.be.equal(201);
    });
  });

  it('sets headers', () => {
    const superagent = {
      get: _sinon2.default.stub()
    };
    const request = {
      set: _sinon2.default.spy(),
      then: () => Promise.resolve()
    };

    superagent.get.withArgs('http://example.com/path').returns(request);

    const client = new _Client2.default(superagent);
    client.setHost('http://example.com');
    client.setHeader('Accept', 'application/json');

    return client.get('/path').then(response => {
      (0, _chai.expect)(request.set.withArgs('Accept', 'application/json')).to.have.been.calledOnce;
    });
  });
});