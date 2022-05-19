describe('set', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  test('case1', () => {
    expect(1 + 1).toBe(2);
  });

  test('case1', () => {
    expect(1 + 3).toBe(4);
  });

  describe('Other Group', () => {
    test('case1', () => {
      expect(1 + 1).toBe(2);
    });

    test('case1', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
