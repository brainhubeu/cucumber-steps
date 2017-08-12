import setHeaderWithValue from '../support/action/setHeaderWithValue';

export default function({ Given }) {
  Given('I set header {stringInDoubleQuotes} with value {stringInDoubleQuotes}', setHeaderWithValue);
}
