// Types
import { ErrieConfig } from 'types';

import { Errie } from '@/errie';

/**
 *
 */
class ValidationError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Validation error.',
      status: 400,
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default ValidationError;
