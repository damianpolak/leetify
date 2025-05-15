<h1 align="center">Leetify</h1>
<p align="center">
  <b>Converts alphabet characters to leet speech: leet haxor example → 1337 h4x0r 3x4mp13</b>
</p>
<br>

![npm](https://img.shields.io/npm/dw/leetify) ![npm](https://img.shields.io/npm/v/leetify) ![NPM](https://img.shields.io/npm/l/leetify) ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/damianpolak/leetify/node.js.yml)



## Install

```
$ npm install leetify
```

## Usage

```js
const leetify = require('leetify');

// Basic usage
leetify('This is Leet String!');
// returns '7h15 15 1337 57r1n6!'

// With options
leetify('Hello World!', { mode: 'basic', casesens: 'default' });
// returns 'h3110 w0r1d!'

// Upper case mode
leetify('Hello World!', { mode: 'basic', casesens: 'upper' });
// returns 'H3110 W0R1D!'

// Pro mode (advanced l33t speak)
leetify('Test Pro', { mode: 'pro', casesens: 'default' });
// returns '+€$+ |°|2()'

// Pro+ mode (randomized advanced l33t speak)
leetify('aaa', { mode: 'pro+', casesens: 'default' });
// returns random combination like '/\\/-\\@' (different each time)
```

## Options

The `leetify` function accepts two parameters:
- `text` (string): The text to convert
- `options` (object): Optional configuration object

### Available Options

```js
{
  mode: 'basic' | 'pro' | 'pro+',    // Conversion mode (default: 'basic')
  casesens: 'default' | 'upper' | 'lower'  // Case sensitivity (default: 'default')
}
```

### Modes
- `basic`: Simple leet speak conversion (e.g., 'e' → '3', 'a' → '4')
- `pro`: Advanced leet speak with consistent replacements (e.g., 'h' → '|-|')
- `pro+`: Advanced leet speak with randomized character replacements

### Case Sensitivity
- `default`: Preserves original case sensitivity
- `upper`: Converts all characters to uppercase
- `lower`: Converts all characters to lowercase

## Examples

```js
// Special characters and punctuation are preserved
leetify('Hello, World!');
// returns 'h3110, w0r1d!'

// Empty strings are handled
leetify('');
// returns ''

// Special characters remain unchanged
leetify('!@#$%^&*()');
// returns '!@#$%^&*()'

// Mixed case with pro mode
leetify('MiXeD CaSe', { mode: 'pro', casesens: 'upper' });
// returns advanced leet speak; non-leet characters (like spaces) will be uppercased
```

## License

MIT © Damian Polak
