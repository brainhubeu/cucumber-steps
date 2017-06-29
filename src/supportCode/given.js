import setHeaderWithValue from '../../features/support/action/setHeaderWithValue';

export default function({ Given }) {
  Given('I set header {string} with value {stringInDoubleQuotes}', setHeaderWithValue);
}
