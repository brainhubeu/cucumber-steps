import setHeaderWithValue from '../support/action/setHeaderWithValue';

export default function({ Given }) {
  Given('I set header {string} with value {string}', setHeaderWithValue);
}
