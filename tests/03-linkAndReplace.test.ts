import 'mocha';
import { expect } from 'chai';

import errie from '../lib';

describe('LinkAndReplace', () => {
  it('Should replace a non errie and add the non-errie to the errie history.', () => {
    const originalErr = new Error('I am old error');
    const newErr = new errie.UnauthorizedError();
    const result = errie.linkAndReplace(originalErr, newErr);
    expect(result).to.equal(newErr);
    expect(result).to.nested.include({ IS_ERRIE: true });
    expect(result).to.nested.include({ message: 'Unauthorized.'});
    expect(result.history[0]).to.equal(originalErr);
    expect(result.history).to.include(newErr);
  });

  it('Should replace an errie and add the non-errie to the errie history.', () => {
    const originalErr = new errie.NotFoundError();
    const newErr = new errie.UnauthorizedError();
    const result = errie.linkAndReplace(originalErr, newErr);
    expect(result).to.equal(newErr);
    expect(result).to.nested.include({ IS_ERRIE: true });
    expect(result).to.nested.include({ message: 'Unauthorized.'});
    expect(result.history[0]).to.equal(originalErr);
    expect(result.history).to.include(newErr);
  });
});
