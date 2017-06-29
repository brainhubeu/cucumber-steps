import { defineSupportCode } from 'cucumber';
import assert from 'assert';

defineSupportCode(function({Then, When}) {
  Then('I am on {stringInDoubleQuotes}', function (path) {
    return Promise.resolve('pending');
  });

  Then('I should see {string}', function (string) {
    return Promise.resolve('pending');
  });
});
