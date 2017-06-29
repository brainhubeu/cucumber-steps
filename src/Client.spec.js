import Client from './Client';
import sinon from 'sinon';
import { expect } from '../tests/chai';

describe('Client', () => {
  it('makes a GET request', () => {
    const superagent = {
      get: sinon.stub(),
    };
    superagent
      .get.withArgs('http://example.com/custom-path')
      .returns(Promise.resolve({
        body: {
          property: 'value',
        },
        status: 200,
      }));

    const client = new Client(superagent);
    client.setHost('http://example.com');

    return client.get('/custom-path')
      .then((response) => {
         expect(response.body).to.be.like({
           'property': 'value',
         });
         expect(response.status).to.be.equal(200);
      });
  });

  it('makes a POST request', () => {
    const body = {
      'property': 'value',
      'other': 'value',
    };
    const superagent = {
      post: sinon.stub(),
    };
    const poster = {
      send: sinon.stub(),
    };

    superagent.post.withArgs('http://example.com/custom-path')
      .returns(poster);

    poster.send.withArgs(body)
      .returns(Promise.resolve({
        body: {
          property: 'value',
        },
        status: 201,
      }));

    const client = new Client(superagent);
    client.setHost('http://example.com');

    return client.post('/custom-path', body)
      .then((response) => {
        expect(response.body).to.be.like({
          'property': 'value',
        });
        expect(response.status).to.be.equal(201);
      });
  })

  it('sets headers', () => {
    const superagent = {
      get: sinon.stub(),
      set: sinon.spy(),
    };

    superagent
      .get.withArgs('http://example.com/path')
      .returns(Promise.resolve({
        body: {
          property: 'value',
        },
        status: 200,
      }));

    const client = new Client(superagent);
    client.setHost('http://example.com');
    client.setHeader('Accept', 'application/json');

    return client.get('/path')
      .then((response) => {
        expect(superagent.set.withArgs('Accept', 'application/json')).to.have.been.calledOnce;
      })
  })
});
