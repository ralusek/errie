import type { ErrieConfig } from '../../types.js';

import { Errie } from '../../errie.js';

class TooManyRequestsError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Too Many Requests.',
      status: 429,
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default TooManyRequestsError;
