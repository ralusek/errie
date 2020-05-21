// Types
import { ErrieConfig } from 'types';

import { Errie } from '@/errie';

/**
 *
 */
class UnknownError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Unknown error.',
      status: 500,
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default UnknownError;
