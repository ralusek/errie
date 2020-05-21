// Types
import { ErrieConfig } from 'types';

import ValidationError from './validation';

/**
 *
 */
class NoDataError extends ValidationError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'No data provided.',
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default NoDataError;
