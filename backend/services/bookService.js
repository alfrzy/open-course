const BookRepository = require('../repository/bookRepository')

const BookRepo = new BookRepository

exports.save = async (data) => {
    return await BookRepo.save(data)
}

