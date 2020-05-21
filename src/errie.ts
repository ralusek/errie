// Types
import { ErrieConfig } from './types';

/**
 * 
 */
export class Errie extends Error {
  public readonly status!: number;
  public readonly timestamp!: number;
  public readonly IS_ERRIE!: boolean;

  public history!: (Errie | Error)[];

  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig = config ? (typeof config === 'string' ? { message: config } : config) : {};

    const message = structuredConfig.message || 'Unknown error.';
    super(message);
    this.message = message;

    if (structuredConfig.stack) this.stack = structuredConfig.stack;
    // @ts-ignore
    else if (typeof Error.captureStackTrace === 'function') {
      // @ts-ignore
      Error.captureStackTrace(this, this.constructor);
    } else { 
      this.stack = (new Error(message)).stack; 
    }

    Object.defineProperty(this, 'name', { value: this.constructor.name });
    Object.defineProperty(this, 'timestamp', { value: Date.now() });
    Object.defineProperty(this, 'status', { value:  structuredConfig.status || 500 });
    Object.defineProperty(this, 'history', {
      writable: true,
      enumerable: false,
      value: [this]
    });    

    Object.defineProperty(this, 'IS_ERRIE', { value: true });
  }

  /**
   *
   */
  dump() {
    const output = [];
    for (let i = this.history.length - 1; i > -1; i--) {
      output.push(this.history[i]);
    }
    output.push(this.history[0].stack && this.history[0].stack.split(/\n+/));
    return output;
  }
}
