'use strict';



/**
 *
 */
class Errie extends Error {
  /**
   *
   */
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};

    const message = config.message || 'Unknown error.';
    super(message);
    this.message = message;

    if (config.stack) this.stack = config.stack;
    else if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else { 
      this.stack = (new Error(message)).stack; 
    }

    Object.defineProperty(this, 'name', {value: this.constructor.name});
    Object.defineProperty(this, 'timestamp', {value: config.timestamp || Date.now()});
    Object.defineProperty(this, 'status', {value: config.status || config.statusCode || 500});
    Object.defineProperty(this, 'history', {
      writable: true,
      enumerable: false,
      value: [this]
    });    

    Object.defineProperty(this, 'IS_ERRIE', {value: true});
  }


  /**
   *
   */
  dump() {
    const output = [];
    for (let i = this.history.length - 1; i > -1; i--) {
      output.push(this.history[i]);
    }
    output.push(this.history[0].stack && this.history[0].stack.split(/\n+/));
    return output;
  }


  /**
   *
   */
  reject() {
    return Promise.reject(this);
  }
}



/**
 *
 */
class ValidationError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 400;
    config.message = config.message || 'Validation error occurred.';
    super(config);
  }
}



/**
 *
 */
class NoDataError extends ValidationError {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 400;
    config.message = config.message || 'No data provided.';
    super(config);
  }
}



/**
 *
 */
class RequiredAttributeError extends ValidationError {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 400;
    config.message = config.message || 'Missing required attribute(s).';
    super(config);
  }
}


/**
 *
 */
class PermissionError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 401;
    config.message = config.message || 'Unspecified permission error.';
    super(config);
  }
}



/**
 *
 */
class UnauthorizedError extends PermissionError {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 401;
    config.message = config.message || 'Unauthorized.';
    super(config);
  }
}


/**
 *
 */
class InvalidCredentialsError extends UnauthorizedError {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 401;
    config.message = config.message || 'Invalid credentials.';
    super(config);
  }
}


/**
 *
 */
class ForbiddenError extends PermissionError {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 403;
    config.message = config.message || 'Forbidden.';
    super(config);
  }
}



/**
 *
 */
class NotFoundError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 404;
    config.message = config.message || 'Not found.';
    super(config);
  }
}



/**
 *
 */
class NoneFoundError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 404;
    config.message = config.message || 'None found.';
    super(config);
  }
}



/**
 *
 */
class TooManyRequestsError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 429;
    config.message = config.message || 'Too Many Requests';
    super(config);
  }
}



/**
 *
 */
class ConflictError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 409;
    config.message = config.message || 'ConflictError encountered.';
    super(config);
  }
}



/**
 *
 */
class AlreadyExistsError extends ConflictError {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 409;
    config.message = config.message || 'Already exists.';
    super(config);
  }
}



/**
 *
 */
class UnknownError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 500;
    config.message = config.message || 'Unknown error.';
    super(config);
  }
}



/**
 *
 */
class DatabaseError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 500;
    config.message = config.message || 'Database error.';
    super(config);
  }
}


/**
 *
 */
class InsufficientStorageError extends Errie {
  constructor(config) {
    config = config ? (isString(config) ? {message: config} : config) : {};
    config.status = config.status || 507;
    config.message = config.message || 'Insufficient storage.';
    super(config);
  }
}



/**
 *
 */
function isString(value) {
  const stringTag = '[object String]';
  const objectToString = Object.prototype.toString;

  return typeof value == 'string' ||
      (!Array.isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

function isObjectLike(value) {
  return !!value && typeof value == 'object';
}


/**
 *
 */
module.exports = Object.freeze({
  Errie,

  ValidationError,
  NoDataError,
  RequiredAttributeError,
  PermissionError,
  UnauthorizedError,
  InvalidCredentialsError,
  ForbiddenError,
  NotFoundError,
  NoneFoundError,
  TooManyRequestsError,
  ConflictError,
  AlreadyExistsError,
  UnknownError,
  DatabaseError,
  InsufficientStorageError
});
