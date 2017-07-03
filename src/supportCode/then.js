import responseCodeShouldBe from '../support/check/responseCodeShouldBe';
import jsonShouldMatchPattern from '../support/check/jsonShouldMatchPattern';

export default function({ Then }) {
  Then('the response code should be {int}', responseCodeShouldBe);
  Then('the JSON should match pattern', jsonShouldMatchPattern);
}
