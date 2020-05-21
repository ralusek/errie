// Types
import { ErrieConfig } from 'types';

import UnknownError from './unknown';

/**
 *
 */
class DatabaseError extends UnknownError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Database error.',
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default DatabaseError;
