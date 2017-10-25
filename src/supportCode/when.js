import sendRequestTo from '../support/action/sendRequestTo';
import sendRequestToWithBody from '../support/action/sendRequestToWithBody';

export default function({ When }) {
  When('I send a {string} request to {string}', sendRequestTo);
  When('I send a {string} request to {string} with body:', sendRequestToWithBody);
}
