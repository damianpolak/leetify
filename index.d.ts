/*
 * leetify
 * https://github.com/damianpolak/leetify
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */
declare function leetify(
  str: string,
  { mode: Mode, casesens: Casesens }?: LeetifyOptions
): string;

interface LeetifyOptions {
  mode: Leetify.Mode;
  casesens: Leetify.Casesens;
}
declare namespace Leetify {
  enum Mode {
    basic = 'basic',
    pro = 'pro',
    proPlus = 'pro+',
  }

  enum Casesens {
    default = 'default',
    upper = 'upper',
    lower = 'lower',
  }
}

export = leetify;
