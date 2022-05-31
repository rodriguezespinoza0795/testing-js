const request = require('supertest');
const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3002);
  });
  afterAll(async () => {
    await server.close();
  });

  describe('test for GET/', () => {
    test('show return "Hello World"', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
