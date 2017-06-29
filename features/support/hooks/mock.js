import { defineSupportCode } from 'cucumber';
import superagent from 'superagent';
import Client from '../../../src/Client';
import application from '../../../src/tests/mock';

defineSupportCode(function({After, Before}) {
  Before(function (scenarioResult) {
    const world = this;
    world.application = application;

    return world.application.then((listener) => {
      world.client = new Client(superagent);
      world.client.setHost('http://localhost:' + listener.address().port);
    })
  });

  After(function () {
  });
});
