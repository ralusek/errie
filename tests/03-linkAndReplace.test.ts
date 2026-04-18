import { describe, expect, it } from 'vitest';

import { NotFoundError, UnauthorizedError, UnknownError, linkAndReplace } from '../src/index.js';

describe('linkAndReplace', () => {
  it('replaces a non-Errie and adds the original error to history', () => {
    const originalError = new Error('I am old error');
    const newError = new UnauthorizedError();
    const result = linkAndReplace(originalError, newError);

    expect(result).toBe(newError);
    expect(result.IS_ERRIE).toBe(true);
    expect(result.message).toBe('Unauthorized.');
    expect(result.history[0]).toBe(originalError);
    expect(result.history).toContain(newError);
  });

  it('replaces an Errie and preserves the full history chain', () => {
    const originalError = new NotFoundError();
    const newError = new UnauthorizedError();
    const result = linkAndReplace(originalError, newError);

    expect(result).toBe(newError);
    expect(result.IS_ERRIE).toBe(true);
    expect(result.message).toBe('Unauthorized.');
    expect(result.history[0]).toBe(originalError);
    expect(result.history).toContain(newError);
  });

  it('creates an UnknownError when no replacement error is provided', () => {
    const result = linkAndReplace();

    expect(result).toBeInstanceOf(UnknownError);
    expect(result.message).toBe('Unknown error.');
  });
});
