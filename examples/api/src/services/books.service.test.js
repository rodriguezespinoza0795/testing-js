const BooksService = require('./books.service');

describe('Test for bookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('test for getbooks', () => {
    test('should return a list book', async () => {
      // Arrage
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });
  });
});
