import type { ErrieConfig } from '../../types.js';

import { Errie } from '../../errie.js';

class InsufficientStorageError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Insufficient storage.',
      status: 507,
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default InsufficientStorageError;
