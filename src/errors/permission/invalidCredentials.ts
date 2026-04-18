import type { ErrieConfig } from '../../types.js';

import PermissionError from './permission.js';

class InvalidCredentialsError extends PermissionError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Invalid credentials.',
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default InvalidCredentialsError;
