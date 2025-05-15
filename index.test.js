import { it, expect } from 'vitest';
import leetify from './index.js';


it('should return leetified string - basic', () => {
  const str = 'This is my example text!'
  const result = leetify(str);
  const expectedResult = '7h15 15 my 3x4m913 73x7!'

  expect(result).toBe(expectedResult);
});

it('should return leetified string - basic options lowercase (default)', () => {
  const str = 'This is my example text!'
  const result = leetify(str, {mode: 'basic', casesens: 'default'});
  const expectedResult = '7h15 15 my 3x4m913 73x7!'

  expect(result).toBe(expectedResult);
});

it('should return leetified string - basic options lowercase', () => {
  const str = 'This is my example text!'
  const result = leetify(str, {mode: 'basic', casesens: 'lower'});
  const expectedResult = '7h15 15 my 3x4m913 73x7!'

  expect(result).toBe(expectedResult);
});

it('should return leetified string - basic options uppercase', () => {
  const str = 'This is my example text!'
  const result = leetify(str, {mode: 'basic', casesens: 'upper'});
  const expectedResult = '7H15 15 MY 3X4M913 73X7!'

  expect(result).toBe(expectedResult);
});

it('should return leetified string - pro mode', () => {
  const str = 'Test pro mode';
  const result = leetify(str, {mode: 'pro', casesens: 'default'});
  const sanitizedResult = result.replace(/^"|"$/g, '');
  expect(sanitizedResult).toBe('+€$+ |°|2() /\\/\\()|)€');
});

it('should return leetified string - pro+ mode', () => {
  const str = 'aaa';
  const result = leetify(str, {mode: 'pro+', casesens: 'default'});
  expect(result).toMatch(/^([/\\@/\-\\αλ]{1,3}){3}$/);
});

it('should handle empty string', () => {
  const str = '';
  const result = leetify(str);
  expect(result).toBe('');
});

it('should handle string with special characters', () => {
  const str = '!@#$%^&*()';
  const result = leetify(str);
  expect(result).toBe('!@#$%^&*()');
});

it('should throw error for invalid mode option', () => {
  const str = 'Test invalid mode';
  expect(() => leetify(str, {mode: 'invalid', casesens: 'default'}))
    .toThrow('Invalid mode. Must be one of: basic, pro, pro+');
});

it('should throw error for invalid casesens option', () => {
  const str = 'Test invalid casesens';
  expect(() => leetify(str, {mode: 'basic', casesens: 'invalid'}))
    .toThrow('Invalid case sensitivity. Must be one of: default, upper, lower');
});

it('should handle mixed case string in pro mode with upper case setting', () => {
  const str = 'MiXeD CaSe';
  const result = leetify(str, {mode: 'pro', casesens: 'upper'});
  const sanitizedResult = result.replace(/^"|"$/g, ''); // Usuń cudzysłowy
  expect(sanitizedResult).toBe('/\\/\\!><€|) (/\\$€');
});

it('should preserve spaces and punctuation', () => {
  const str = 'Hello, World!';
  const result = leetify(str, {mode: 'basic', casesens: 'default'});
  expect(result).toBe('H3110, W0r1d!');
});