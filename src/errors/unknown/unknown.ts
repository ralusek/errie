import type { ErrieConfig } from '../../types.js';

import { Errie } from '../../errie.js';

class UnknownError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Unknown error.',
      status: 500,
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default UnknownError;
