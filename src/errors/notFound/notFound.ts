import type { ErrieConfig } from '../../types.js';

import { Errie } from '../../errie.js';

class NotFoundError extends Errie {
  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = {
      message: 'Not found.',
      status: 404,
      ...(typeof config === 'string' ? { message: config } : config ?? {}),
    };

    super(structuredConfig);
  }
}

export default NotFoundError;
