import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);
const distEsmUrl = new URL('../dist/index.js', import.meta.url);
const distCjsPath = fileURLToPath(new URL('../dist/index.cjs', import.meta.url));

describe('package entrypoint shape', () => {
  it('supports named ESM imports from the built package', async () => {
    const errieModule = await import(distEsmUrl.href);
    const error = new errieModule.ConflictError();

    expect(error.name).toBe('ConflictError');
    expect(error.message).toBe('Conflict.');
  });

  it('does not expose a compatibility default export for ESM consumers', async () => {
    const errieModule = await import(distEsmUrl.href);

    expect(errieModule.default).toBeUndefined();
  });

  it('exposes the intended CJS shape for require consumers', () => {
    const errieModule = require(distCjsPath);
    const error = new errieModule.ConflictError();

    expect(typeof errieModule.ConflictError).toBe('function');
    expect(error.message).toBe('Conflict.');
  });
});
