import type { ErrieConfig } from '../../types.js';

import { Errie } from '../../errie.js';

class ConflictError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Conflict.',
      status: 409,
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default ConflictError;
