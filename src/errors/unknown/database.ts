import type { ErrieConfig } from '../../types.js';

import UnknownError from './unknown.js';

class DatabaseError extends UnknownError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Database error.',
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default DatabaseError;
