import givenSupportCode from './supportCode/given';
import whenSupportCode from './supportCode/when';
import thenSupportCode from './supportCode/then';

export default ({ Given, When, Then }) => {
  givenSupportCode({ Given });
  whenSupportCode({ When });
  thenSupportCode({ Then });
};
