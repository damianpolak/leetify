/*
 * leetify
 * https://github.com/damianpolak/leetify
 *
 * Copyright 2018-2025, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

const VALID_MODES = ['basic', 'pro', 'pro+'];
const VALID_CASE_SENS = ['default', 'upper', 'lower'];

const mappingStructure = {
  a: { basic: ['4'], pro: ['/\\', '@', '/-\\', 'α', 'λ'] },
  b: { basic: ['8'], pro: ['|3', 'ß', '13' , 'I3', 'J3'] },
  c: { basic: [], pro: ['(', '[', '<', '©', '¢'] },
  d: { basic: [], pro: ['|)', '|]', 'Ð', 'đ'] },
  e: { basic: ['3'], pro: ['€', '&', '£', 'ε'] },
  f: { basic: [], pro: ['|=' , 'PH' , '|*|-|' , '|"' , 'ƒ' , '/='] },
  g: { basic: ['6'], pro: ['&', '(_+'] },
  h: { basic: [], pro: ['#', '|-|', '}{', ']-[', '/-/', ')-(]'] },
  i: { basic: ['1'], pro: ['!', '|', '][', 'ỉ'] },
  j: { basic: [], pro: [',_|','_|', '._]', '¿'] },
  k: { basic: [], pro: ['|<', '|{', '|(', 'X'] },
  l: { basic: ['1'], pro: ['|_' , '£' , '|' , '][_'] },
  m: { basic: [], pro: ['/\\/\\', '/v\\' ,'|V|' ,']V[','|\/|' ,'AA' ,'[]V[]' , '|11' , '/|\\', '^^', '(V)', '|Y|' , '!\\/!']},
  n: { basic: [], pro: ['|\\|', '\/\\/', '\/V', '|V', '\/\\\/', '|1', '(\\)', '11', '!\!'] },
  o: { basic: ['0'], pro: ['()', '[]', '*', '°', '<>', 'ø', '{[]}'] },
  p: { basic: ['9'], pro: ['|°', '|>', '|*', '[]D', '][D', '|²', '|?', '|D'] },
  q: { basic: [], pro: ['(_,)', '()_'] },
  r: { basic: [], pro: ['|2', '®', 'Я', 'I2', '/2'] },
  s: { basic: ['5'], pro: ['$', '§', 'ŝ', 'ş'] },
  t: { basic: ['7'], pro: ['+', '†', '\'][\'', '"|"', '~|~','|]'] },
  u: { basic: [], pro: ['|_|', 'µ', '[_]', '(_)', 'v'] },
  v: { basic: [], pro: ['\\\/' , '|/' , '\|' , '\\\''] },
  w: { basic: [], pro: ['\\\/\\\/' , 'VV' , '\\A\/' , '\\\'', 'uu' , '\\^\/' , '\\|\/' , 'uJ'] },
  x: { basic: [], pro: ['><', ')(', '}{', '%', '×', ']['] },
  y: { basic: [], pro: ['`/', '°/', '¥']},
  z: { basic: ['2'], pro: [] },
};

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

const validateOptions = (options) => {
  if (!options) {
    throw new ValidationError('Options object is required');
  }

  const { mode, casesens } = options;

  if (!VALID_MODES.includes(mode)) {
    throw new ValidationError(`Invalid mode. Must be one of: ${VALID_MODES.join(', ')}`);
  }

  if (!VALID_CASE_SENS.includes(casesens)) {
    throw new ValidationError(`Invalid case sensitivity. Must be one of: ${VALID_CASE_SENS.join(', ')}`);
  }

  return true;
};

const getTransformedCase = (letter, casesens) => {
  switch (casesens) {
    case 'upper':
      return letter.toUpperCase();
    case 'lower':
      return letter.toLowerCase();
    default:
      return letter;
  }
};

const transformLetter = (letter, mode, casesens) => {
  const lowerLetter = letter.toLowerCase();
  
  if (!mappingStructure[lowerLetter]) {
    return getTransformedCase(letter, casesens);
  }

  const mapping = mappingStructure[lowerLetter];

  switch(mode) {
    case 'basic': {
      const [basicChar] = mapping.basic;
      return basicChar || getTransformedCase(letter, casesens);
    }
    case 'pro':
      return mapping.pro[0];
    case 'pro+': {
      const proChars = mapping.pro;
      return proChars[Math.floor(Math.random() * proChars.length)];
    }
    default:
      return letter;
  }
};

const leetify = (str, options = { mode: 'basic', casesens: 'default' }) => {
  validateOptions(options);
  
  return [...str]
    .map(letter => transformLetter(letter, options.mode, options.casesens))
    .join('');
};

export default leetify;
