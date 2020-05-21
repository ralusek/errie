// Types
import { ErrieConfig } from 'types';

import NotFoundError from './notFound';

/**
 *
 */
class NoneFoundError extends NotFoundError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'None found.',
      ...(config ? (typeof config === 'string' ? { message: config } : config) : {}),
    };
    
    super(structuredConfig);
  }
}

export default NoneFoundError;
