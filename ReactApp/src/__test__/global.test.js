const text = 'Hola Mundo';

test('Nombre de la prueba', () => {
	expect(text).toMatch(/Mundo/);
});

const sd = ['David', 'Paola', 'Jose', 'Edgar', 'Erwin', 'Rafael'];

test('¿Existe este sd?', () => {
	expect(sd).toContain('David');
});

test('¿Es mayor?', () => {
	expect(10).toBeGreaterThan(5);
});

test('¿Verdadero?', () => {
	expect(true).toBeTruthy();
});

test('Probar Callback', () => {
  reverseString ('Hola', str => {
      expect(str).toBe('aloH');
  })
});

const reverseString = str => {
  return new Promise((resolve, reject) => {
      if(!str) {
          reject(Error('Error'))
      }
      resolve(str.split("").reverse().join(""))
  })
}

test('Probar promesa', () => {
  return reverseString('Hola')
  .then(string => {
      expect(string).toBe('aloH')
  })
});

test('Probar Async/await', async () => {
  const string = await reverseString('Hola');
  expect(string).toBe('aloH')
});

afterEach (() => console.log('Después de cada prueba'))
afterAll (() => console.log('Después de todas las pruebas'))
beforeEach (() => console.log('antes de cada prueba'))
beforeAll (() => console.log('antes de todas las pruebas'))
