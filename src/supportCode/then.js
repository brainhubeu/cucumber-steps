import responseCodeShouldBe from '../../features/support/check/responseCodeShouldBe';
import jsonShouldMatchPattern from '../../features/support/check/jsonShouldMatchPattern';

export default function({ Then }) {
  Then('the response code should be {int}', responseCodeShouldBe);
  Then('the JSON should match pattern', jsonShouldMatchPattern);
}
