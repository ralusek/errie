import type { ErrieConfig } from '../../types.js';

import { Errie } from '../../errie.js';

class PermissionError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Unspecified permission error.',
      status: 401,
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default PermissionError;
