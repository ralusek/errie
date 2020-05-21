// Types
import { ErrieConfig } from './types';

import { Errie } from '@/errie';

import AlreadyExistsError from './errors/conflict/alreadyExists';
import ConflictError from './errors/conflict/conflict';
import DatabaseError from './errors/unknown/database';
import ForbiddenError from './errors/permission/forbidden';
import InsufficientStorageError from './errors/insufficientStorage/insufficientStorage';
import InvalidCredentialsError from './errors/permission/invalidCredentials';
import NoDataError from './errors/validation/noData';
import NoneFoundError from './errors/notFound/noneFound';
import NotFoundError from './errors/notFound/notFound';
import PermissionError from './errors/permission/permission';
import RequiredAttributeError from './errors/validation/requiredAttributeError';
import TooManyRequestsError from './errors/tooManyRequests/tooManyRequests';
import UnauthorizedError from './errors/permission/unauthorized';
import UnknownError from './errors/unknown/unknown';
import ValidationError from './errors/validation/validation';






export default {
  /**
   *
   */
  link: (error: Error | Errie, newError?: ErrieConfig | Errie) => {
    const nextError = newError ? (('IS_ERRIE' in newError) ? newError : new Errie(newError)): new UnknownError();
    if (!error) return nextError;

    if (!('IS_ERRIE' in error)) {
      nextError.history.unshift(error);
      return nextError;
    }

    error.history = [ ...error.history, ...nextError.history ];

    return error;
  },
  /**
   *
   */
  linkAndReplace: (error: Error | Errie, newError?: ErrieConfig | Errie) => {
    const nextError = newError ? (('IS_ERRIE' in newError) ? newError : new Errie(newError)): new UnknownError();
  
    if (!error) return nextError;
    if (!('IS_ERRIE' in error)) {
      nextError.history.unshift(error);
      return nextError;
    }
  
    nextError.history = [ ...error.history, ...nextError.history ];
    return nextError;
  },

  Errie,
  AlreadyExistsError,
  ConflictError,
  DatabaseError,
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
