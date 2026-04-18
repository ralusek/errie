import type { ErrieConfig } from '../../types.js';

import PermissionError from './permission.js';

class UnauthorizedError extends PermissionError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Unauthorized.',
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default UnauthorizedError;
