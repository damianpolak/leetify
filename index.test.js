import { it, expect } from 'vitest';

const leetify = require('./index');

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