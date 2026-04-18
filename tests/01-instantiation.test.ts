import { describe, expect, it } from 'vitest';

import {
  AlreadyExistsError,
  ConflictError,
  DatabaseError,
  Errie,
  ForbiddenError,
  InsufficientStorageError,
  InvalidCredentialsError,
  NoDataError,
  NoneFoundError,
  NotFoundError,
  PermissionError,
  RequiredAttributeError,
  TooManyRequestsError,
  UnauthorizedError,
  UnknownError,
  ValidationError,
} from '../src/index.js';

type ErrorConstructor = new () => { status: number; message: string };

const cases: Array<[ErrorConstructor, number, string]> = [
  [Errie, 500, 'Unknown error.'],
  [AlreadyExistsError, 409, 'Already exists.'],
  [ConflictError, 409, 'Conflict.'],
  [InsufficientStorageError, 507, 'Insufficient storage.'],
  [NotFoundError, 404, 'Not found.'],
  [NoneFoundError, 404, 'None found.'],
  [ForbiddenError, 401, 'Forbidden.'],
  [InvalidCredentialsError, 401, 'Invalid credentials.'],
  [PermissionError, 401, 'Unspecified permission error.'],
  [UnauthorizedError, 401, 'Unauthorized.'],
  [TooManyRequestsError, 429, 'Too Many Requests.'],
  [DatabaseError, 500, 'Database error.'],
  [UnknownError, 500, 'Unknown error.'],
  [NoDataError, 400, 'No data provided.'],
  [RequiredAttributeError, 400, 'Missing required attribute(s).'],
  [ValidationError, 400, 'Validation error.'],
];

describe('Instantiation', () => {
  it.each(cases)('instantiates %p as expected', (ErrorClass, status, message) => {
    const error = new ErrorClass();

    expect(error.status).toBe(status);
    expect(error.message).toBe(message);
  });
});
