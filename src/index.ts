import type { ErrieConfig } from './types.js';

import { Errie } from './errie.js';
import AlreadyExistsError from './errors/conflict/alreadyExists.js';
import ConflictError from './errors/conflict/conflict.js';
import DatabaseError from './errors/unknown/database.js';
import ForbiddenError from './errors/permission/forbidden.js';
import InsufficientStorageError from './errors/insufficientStorage/insufficientStorage.js';
import InvalidCredentialsError from './errors/permission/invalidCredentials.js';
import NoDataError from './errors/validation/noData.js';
import NoneFoundError from './errors/notFound/noneFound.js';
import NotFoundError from './errors/notFound/notFound.js';
import PermissionError from './errors/permission/permission.js';
import RequiredAttributeError from './errors/validation/requiredAttributeError.js';
import TooManyRequestsError from './errors/tooManyRequests/tooManyRequests.js';
import UnauthorizedError from './errors/permission/unauthorized.js';
import UnknownError from './errors/unknown/unknown.js';
import ValidationError from './errors/validation/validation.js';

type LinkableError = Error | Errie;
type NextErrorInput = ErrieConfig | Errie;

function isErrie(value: unknown): value is Errie {
  return Boolean(value && typeof value === 'object' && 'IS_ERRIE' in value);
}

function createNextError(newError?: NextErrorInput): Errie {
  if (!newError) {
    return new UnknownError();
  }

  return isErrie(newError) ? newError : new Errie(newError);
}

export function link(error?: LinkableError, newError?: NextErrorInput): Errie {
  const nextError = createNextError(newError);

  if (!error) {
    return nextError;
  }

  if (!isErrie(error)) {
    nextError.history.unshift(error);
    return nextError;
  }

  error.history = [...error.history, ...nextError.history];
  return error;
}

export function linkAndReplace(error?: LinkableError, newError?: NextErrorInput): Errie {
  const nextError = createNextError(newError);

  if (!error) {
    return nextError;
  }

  if (!isErrie(error)) {
    nextError.history.unshift(error);
    return nextError;
  }

  nextError.history = [...error.history, ...nextError.history];
  return nextError;
}

export {
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
};

export type { ErrieConfig };
