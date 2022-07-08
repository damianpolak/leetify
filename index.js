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
module.exports = leetify = (
  str,
  options = { mode: 'basic', casesens: 'default' }
) => {
  const optionsProperties = { 
    properties: ['mode', 'casesens'], 
    property: {
      mode: ['basic', 'pro', 'pro+'],
      casesens: ['default', 'upper', 'lower']
    }
  }

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

  function optionsValidate(options) {
    if(!options) {
      return false;
    }
    
    const result1 = optionsProperties.properties.every(item => {
      if(options.hasOwnProperty(item)) {
        return item;
      }
    })
  
    if(result1) {
      for(let item of Object.keys(optionsProperties.property)) {
        if(!optionsProperties.property[item].includes(options[item])) {
          return false
        }
      }
    } else {
      return false;
    }
  
    return true;
  }

  function retToggledCase(letter) {
    switch (options.casesens) {
      default:
        return letter;
      case 'upper':
        return letter.toUpperCase();
      case 'lower':
        return letter.toLowerCase();
    }
  }

  if(!optionsValidate(options)) {
    throw new Error('Options validation failed');
  };

  let newText = '';
  const splittedStr = str.split('');

  const mappingStructKeys = Object.keys(mappingStructure);
  for (const letter of splittedStr) {
    if(mappingStructKeys.includes(letter.toLowerCase())) {
      switch(options.mode) {
        case 'basic':
          if(mappingStructure[letter.toLowerCase()][options.mode][0]) {
            newText += mappingStructure[letter.toLowerCase()][options.mode][0];
          } else {
            newText += retToggledCase(letter);
          }
        break;
        case 'pro':
          newText += mappingStructure[letter.toLowerCase()][options.mode][0];
        break;
        case 'pro+':
          let proPlusLetters = mappingStructure[letter.toLowerCase()]['pro'];
          const randomizedIndex = Math.floor(Math.random() * proPlusLetters.length);
          newText += proPlusLetters[randomizedIndex];
        break;
      }
    } else {
      newText += retToggledCase(letter);
    }
  }

  return newText;
};
