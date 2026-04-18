import type { ErrieConfig } from '../../types.js';

import NotFoundError from './notFound.js';

class NoneFoundError extends NotFoundError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'None found.',
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default NoneFoundError;
