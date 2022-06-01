const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for bookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getbooks', () => {
    test('should return a list book', async () => {
      // Arrage
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(20);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
