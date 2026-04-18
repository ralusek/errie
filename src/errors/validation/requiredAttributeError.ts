import type { ErrieConfig } from '../../types.js';

import ValidationError from './validation.js';

class RequiredAttributeError extends ValidationError {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Missing required attribute(s).',
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default RequiredAttributeError;
