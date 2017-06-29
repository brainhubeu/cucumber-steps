import chai, { expect } from 'chai';
import like from 'chai-like';
import sinonChai from 'sinon-chai';
import matcherPlugin from './matcherPlugin';

chai.use(sinonChai);
chai.use(like);
like.extend(matcherPlugin);

export { expect }
