import sendRequestTo from '../support/action/sendRequestTo';
import sendRequestToWithBody from '../support/action/sendRequestToWithBody';

export default function({ When }) {
  When('I send a {string} request to {stringInDoubleQuotes}', sendRequestTo);
  When('I send a {string} request to {stringInDoubleQuotes} with body:', sendRequestToWithBody);
}
