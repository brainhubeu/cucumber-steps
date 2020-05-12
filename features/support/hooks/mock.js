import { defineSupportCode } from 'cucumber';
import superagent from 'superagent';

import Client from '../../../src/Client';
import application from '../../../src/tests/mock';

defineSupportCode(function({ Before }) {
  Before(function() {
    return application.then(listener => {
      this.client = new Client(superagent);
      this.client.setHost(`http://localhost:${ listener.address().port}`);
    });
  });
});
