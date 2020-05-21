// Types
import { ErrieConfig } from 'types';

import { Errie } from '@/errie';

/**
 *
 */
class PermissionError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Unspecified permission error.',
      status: 401,
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default PermissionError;
