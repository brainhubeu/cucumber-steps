import givenSupportCode from './supportCode/given';
import whenSupportCode from './supportCode/when';
import thenSupportCode from './supportCode/then';
import Client from './Client';

export { Client as Client };

export default ({ Given, When, Then }) => {
  givenSupportCode({ Given });
  whenSupportCode({ When });
  thenSupportCode({ Then });
};
