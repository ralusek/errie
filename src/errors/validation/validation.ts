import type { ErrieConfig } from '../../types.js';

import { Errie } from '../../errie.js';

class ValidationError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Validation error.',
      status: 400,
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default ValidationError;
