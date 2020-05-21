// Types
import { ErrieConfig } from 'types';

import ValidationError from './validation';

/**
 *
 */
class RequiredAttributeError extends ValidationError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Missing required attribute(s).',
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default RequiredAttributeError;
