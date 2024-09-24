const Book = require('../models/book')

class BookRepository {

    async save(data) {
        const book = await Book.create(data)

        return book.toJSON()
    }
}

module.exports = BookRepository
