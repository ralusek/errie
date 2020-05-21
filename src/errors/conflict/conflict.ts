// Types
import { ErrieConfig } from 'types';

import { Errie } from '@/errie';

/**
 *
 */
class ConflictError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Conflict.',
      status: 409,
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default ConflictError;
