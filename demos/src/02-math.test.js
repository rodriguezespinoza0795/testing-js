const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  const rta = sum(1, 2);
  expect(rta).toBe(3);
});

test('adds 1 * 2 to equal 2', () => {
  const rta = multiply(1, 2);
  expect(rta).toBe(2);
});

test('adds 2 / 2 to equal 1', () => {
  const rta = divide(2, 2);
  expect(rta).toBe(1);
});
