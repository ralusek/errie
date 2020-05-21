// Types
import { ErrieConfig } from 'types';

import PermissionError from './permission';

/**
 *
 */
class ForbiddenError extends PermissionError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Forbidden.',
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default ForbiddenError;
