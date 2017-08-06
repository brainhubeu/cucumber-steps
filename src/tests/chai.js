import chai, { expect } from 'chai';
import chaiJsonPattern from 'chai-json-pattern';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.use(chaiJsonPattern);

export { expect };
