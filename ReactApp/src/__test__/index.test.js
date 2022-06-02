const ramdomsd = require('../index')

test('Probar funcionalidad', async () => {
    expect(typeof(ramdomsd())).toBe('string')
});
