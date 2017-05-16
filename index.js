'use strict';

const errors = require('./errors');


const errie = {};

/**
 *
 */
errie.link = function(oldError, newError) {
  if (!newError) newError = new errors.Errie();
  else if (!newError.IS_ERRIE) newError = new errors.Errie(newError);

  if (!oldError) return newError;
  if (!oldError.IS_ERRIE) {
    newError.history.unshift(oldError);
    return newError;
  }

  oldError.history.push(newError.history[0]);

  return oldError;
};


/**
 *
 */
errie.linkAndReplace = function(oldError, newError) {
  if (!newError) newError = new errors.Errie();
  else if (!newError.IS_ERRIE) newError = new errors.Errie(newError);

  if (!oldError) return newError;
  if (!oldError.IS_ERRIE) oldError = new errors.Errie(oldError);

  newError.history = oldError.history.concat(newError.history);
  return newError;
};


/**
 *
 */
errie.propagate = function(oldError, newError) {
  return errie.link(oldError, newError).reject();
};


/**
 *
 */
errie.propagateAndReplace = function(oldError, newError) {
  return errie.linkAndReplace(oldError, newError).reject();
};


module.exports = Object.freeze(Object.assign(errie, errors));
