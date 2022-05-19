// matchers
test('test obj', () => {
  const data = { name: 'David' };
  data.lastname = 'Rodriguez';
  expect(data).toEqual({ name: 'David', lastname: 'Rodriguez' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('Strings', () => {
  expect('David').toMatch(/vid/);
});

test('List / Arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
