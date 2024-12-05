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

test('Multiple numbers return their sum', () => {
  expect(calculator.add('1,2,3,4')).toBe(10);
  expect(calculator.add('10,20,30,40,50')).toBe(150);
});

test('Large number of inputs', () => {
  const input = Array.from({ length: 100 }, (_, i) => i + 1).join(',');
  expect(calculator.add(input)).toBe(5050); // Sum of numbers 1 to 100
});
