import operate from './operate';

describe('operate function', () => {
  test('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('subtracts two numbers', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  test('multiplies two numbers', () => {
    expect(operate(4, 3, 'x')).toBe('12');
  });

  test('divides two numbers', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });

  test('finds the modulo of two numbers', () => {
    expect(operate(7, 4, '%')).toBe('3');
  });

  test('throws an error when the operation is unknown', () => {
    expect(() => operate(1, 2, '&')).toThrow("Unknown operation '&'");
  });
});
