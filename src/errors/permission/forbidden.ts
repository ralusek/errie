import type { ErrieConfig } from '../../types.js';

import PermissionError from './permission.js';

class ForbiddenError extends PermissionError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Forbidden.',
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default ForbiddenError;
