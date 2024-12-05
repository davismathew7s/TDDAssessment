const calculator = require('../src/calculator');

test('Empty string returns 0', () => {
  expect(calculator.add('')).toBe(0);
});

test('Single number returns the number itself', () => {
  expect(calculator.add('1')).toBe(1);
});

test('Two numbers returns their sum', () => {
  expect(calculator.add('1,5')).toBe(6);
});
