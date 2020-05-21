// Types
import { ErrieConfig } from 'types';

import PermissionError from './permission';

/**
 *
 */
class UnauthorizedError extends PermissionError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Unauthorized.',
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default UnauthorizedError;
