/*
 * superbytes
 * https://github.com/damianpolak/leetify
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

module.exports = leetify = (str) => {
   'use strict';

   let replaceAt = (str, index, replacement) => {
       return str.substr(0, index) + replacement + str.substr(index + replacement.length);
   }

   for(let i = 0; i <= str.length - 1; i++) {
     switch(true) {
       case 'A' == str[i] || 'a' == str[i]:
        str = replaceAt(str, i, '4');
       break;
       case 'B' == str[i] || 'b' == str[i]:
        str = replaceAt(str, i, '8');
       break;
       case 'E' == str[i] || 'e' == str[i]:
        str = replaceAt(str, i, '3');
       break;
       case 'G' == str[i] || 'g' == str[i]:
        str = replaceAt(str, i, '6');
       break;
       case 'L' == str[i] || 'l' == str[i]:
        str = replaceAt(str, i, '1');
       break;
       case 'O' == str[i] || 'o' == str[i]:
        str = replaceAt(str, i, '0');
       break;
       case 'P' == str[i] || 'p' == str[i]:
        str = replaceAt(str, i, '9');
       break;
       case 'S' == str[i] || 's' == str[i]:
        str = replaceAt(str, i, '5');
       break;
       case 'T' == str[i] || 't' == str[i]:
        str = replaceAt(str, i, '7');
       break;
       case 'Z' == str[i] || 'z' == str[i]:
        str = replaceAt(str, i, '2');
       break;
     }
   }
   return str;
 };
