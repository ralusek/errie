import type { ErrieConfig } from '../../types.js';

import ConflictError from './conflict.js';

class AlreadyExistsError extends ConflictError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Already exists.',
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default AlreadyExistsError;
