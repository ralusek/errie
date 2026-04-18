import { describe, expect, it } from 'vitest';

import { NotFoundError, UnauthorizedError, UnknownError, link } from '../src/index.js';

describe('link', () => {
  it('replaces a non-Errie and adds the original error to history', () => {
    const originalError = new Error('I am old error');
    const newError = new UnauthorizedError();
    const result = link(originalError, newError);

    expect(result).toBe(newError);
    expect(result.IS_ERRIE).toBe(true);
    expect(result.message).toBe('Unauthorized.');
    expect(result.history[0]).toBe(originalError);
    expect(result.history).toContain(newError);
  });

  it('preserves an existing Errie and appends the new Errie to history', () => {
    const originalError = new NotFoundError();
    const newError = new UnauthorizedError();
    const result = link(originalError, newError);

    expect(result).toBe(originalError);
    expect(result.IS_ERRIE).toBe(true);
    expect(result.message).toBe('Not found.');
    expect(result.history[0]).toBe(originalError);
    expect(result.history).toContain(newError);
  });

  it('creates an UnknownError when no replacement error is provided', () => {
    const result = link();

    expect(result).toBeInstanceOf(UnknownError);
    expect(result.message).toBe('Unknown error.');
  });
});
