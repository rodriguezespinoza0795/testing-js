const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBook = (size = 10) => {
  const fakeBooks = [];
  for (let index = 0; index < size; index += 1) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBook };
