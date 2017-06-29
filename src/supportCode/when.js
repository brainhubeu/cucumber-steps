import sendRequestTo from '../../features/support/action/sendRequestTo';
import sendRequestToWithBody from '../../features/support/action/sendRequestToWithBody';

export default function({ When }) {
  When('I send a {string} request to {stringInDoubleQuotes}', sendRequestTo);
  When('I send a {string} request to {stringInDoubleQuotes} with body:', sendRequestToWithBody);
}
