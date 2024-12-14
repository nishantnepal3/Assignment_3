const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const multiply = (a, b) => a * b;

test('multiplies 2 * 2 equals 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

