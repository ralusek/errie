import type { ErrieConfig } from '../../types.js';

import ValidationError from './validation.js';

class NoDataError extends ValidationError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'No data provided.',
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default NoDataError;
