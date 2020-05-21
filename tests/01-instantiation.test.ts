import 'mocha';
import { expect } from 'chai';

import errie from '../lib';

describe('Instantiation', () => {
  it('Instantiate Errie as expected.', () => {
    const error = new errie.Errie();
    expect(error).to.nested.include({ status: 500 });
    expect(error).to.nested.include({ message: 'Unknown error.' });
  });

  it('Instantiate AlreadyExistsError as expected.', () => {
    const error = new errie.AlreadyExistsError();
    expect(error).to.nested.include({ status: 409 });
    expect(error).to.nested.include({ message: 'Already exists.' });
  });

  it('Instantiate ConflictError as expected.', () => {
    const error = new errie.ConflictError();
    expect(error).to.nested.include({ status: 409 });
    expect(error).to.nested.include({ message: 'Conflict.' });
  });

  it('Instantiate InsufficientStorageError as expected.', () => {
    const error = new errie.InsufficientStorageError();
    expect(error).to.nested.include({ status: 507 });
    expect(error).to.nested.include({ message: 'Insufficient storage.' });
  });

  it('Instantiate NotFoundError as expected.', () => {
    const error = new errie.NotFoundError();
    expect(error).to.nested.include({ status: 404 });
    expect(error).to.nested.include({ message: 'Not found.' });
  });

  it('Instantiate NoneFoundError as expected.', () => {
    const error = new errie.NoneFoundError();
    expect(error).to.nested.include({ status: 404 });
    expect(error).to.nested.include({ message: 'None found.' });
  });

  it('Instantiate ForbiddenError as expected.', () => {
    const error = new errie.ForbiddenError();
    expect(error).to.nested.include({ status: 401 });
    expect(error).to.nested.include({ message: 'Forbidden.' });
  });

  it('Instantiate InvalidCredentialsError as expected.', () => {
    const error = new errie.InvalidCredentialsError();
    expect(error).to.nested.include({ status: 401 });
    expect(error).to.nested.include({ message: 'Invalid credentials.' });
  });

  it('Instantiate PermissionError as expected.', () => {
    const error = new errie.PermissionError();
    expect(error).to.nested.include({ status: 401 });
    expect(error).to.nested.include({ message: 'Unspecified permission error.' });
  });

  it('Instantiate UnauthorizedError as expected.', () => {
    const error = new errie.UnauthorizedError();
    expect(error).to.nested.include({ status: 401 });
    expect(error).to.nested.include({ message: 'Unauthorized.' });
  });

  it('Instantiate TooManyRequestsError as expected.', () => {
    const error = new errie.TooManyRequestsError();
    expect(error).to.nested.include({ status: 429 });
    expect(error).to.nested.include({ message: 'Too Many Requests.' });
  });

  it('Instantiate DatabaseError as expected.', () => {
    const error = new errie.DatabaseError();
    expect(error).to.nested.include({ status: 500 });
    expect(error).to.nested.include({ message: 'Database error.' });
  });

  it('Instantiate UnknownError as expected.', () => {
    const error = new errie.UnknownError();
    expect(error).to.nested.include({ status: 500 });
    expect(error).to.nested.include({ message: 'Unknown error.' });
  });

  it('Instantiate NoDataError as expected.', () => {
    const error = new errie.NoDataError();
    expect(error).to.nested.include({ status: 400 });
    expect(error).to.nested.include({ message: 'No data provided.' });
  });

  it('Instantiate RequiredAttributeError as expected.', () => {
    const error = new errie.RequiredAttributeError();
    expect(error).to.nested.include({ status: 400 });
    expect(error).to.nested.include({ message: 'Missing required attribute(s).' });
  });

  it('Instantiate ValicationError as expected.', () => {
    const error = new errie.ValidationError();
    expect(error).to.nested.include({ status: 400 });
    expect(error).to.nested.include({ message: 'Validation error.' });
  });
});
