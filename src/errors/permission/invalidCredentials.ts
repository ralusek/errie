// Types
import { ErrieConfig } from 'types';

import PermissionError from './permission';

/**
 *
 */
class InvalidCredentialsError extends PermissionError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Invalid credentials.',
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default InvalidCredentialsError;
