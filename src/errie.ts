import type { ErrieConfig } from './types.js';

export type ErrieHistoryItem = Errie | Error;
export type ErrieDumpEntry = ErrieHistoryItem | string[] | undefined;

export class Errie extends Error {
  public readonly status!: number;
  public readonly timestamp!: number;
  public readonly IS_ERRIE!: boolean;
  public history!: ErrieHistoryItem[];

  constructor(config?: ErrieConfig | string) {
    const structuredConfig: ErrieConfig =
      typeof config === 'string' ? { message: config } : config ?? {};
    const message = structuredConfig.message ?? 'Unknown error.';

    super(message);

    if (structuredConfig.stack) {
      this.stack = structuredConfig.stack;
    } else if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }

    Object.defineProperty(this, 'name', { value: this.constructor.name });
    Object.defineProperty(this, 'timestamp', { value: Date.now() });
    Object.defineProperty(this, 'status', { value: structuredConfig.status ?? 500 });
    Object.defineProperty(this, 'history', {
      writable: true,
      enumerable: false,
      value: [this],
    });
    Object.defineProperty(this, 'IS_ERRIE', { value: true });
  }

  dump(): ErrieDumpEntry[] {
    const output: ErrieDumpEntry[] = [];

    for (let index = this.history.length - 1; index >= 0; index -= 1) {
      output.push(this.history[index]);
    }

    output.push(this.history[0]?.stack?.split(/\n+/));
    return output;
  }
}
