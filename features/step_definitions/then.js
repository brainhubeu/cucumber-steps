import { defineSupportCode } from 'cucumber';
import responseCodeShouldBe from '../support/check/responseCodeShouldBe';
import jsonShouldMatchPattern from '../support/check/jsonShouldMatchPattern';

defineSupportCode(function({ Then }) {
  Then('the response code should be {int}', responseCodeShouldBe);
  Then('the JSON should match pattern', jsonShouldMatchPattern);
});
