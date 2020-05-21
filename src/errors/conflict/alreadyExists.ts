// Types
import { ErrieConfig } from 'types';

import ConflictError from './conflict';

/**
 *
 */
class AlreadyExistsError extends ConflictError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Already exists.',
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default AlreadyExistsError;
