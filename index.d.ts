type Mode = 'basic' | 'pro' | 'pro+';
type Casesens = 'default' | 'upper' | 'lower';

interface LeetifyOptions {
  mode?: Mode;
  casesens?: Casesens;
}

declare function leetify(str: string, options?: LeetifyOptions): string;

export = leetify;
