// Types
import { ErrieConfig } from 'types';

import { Errie } from '@/errie';

/**
 *
 */
class TooManyRequestsError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Too Many Requests.',
      status: 429,
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default TooManyRequestsError;
