import { defineSupportCode } from 'cucumber';
import setHeaderWithValue from '../support/action/setHeaderWithValue';

defineSupportCode(function({ Given }) {
  Given('I set header {string} with value {stringInDoubleQuotes}', setHeaderWithValue);
});
