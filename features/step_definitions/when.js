import { defineSupportCode } from 'cucumber';
import sendRequestTo from '../support/action/sendRequestTo';
import sendRequestToWithBody from '../support/action/sendRequestToWithBody';

defineSupportCode(function({ When }) {
  When('I send a {string} request to {stringInDoubleQuotes}', sendRequestTo);
  When('I send a {string} request to {stringInDoubleQuotes} with body:', sendRequestToWithBody);
});
