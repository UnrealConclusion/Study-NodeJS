const Book = require('../models/book');

// home page
async function getBooks(req, res, next) {
    try {
        const books = await Book.fetchAll();
        console.log(books);
        res.render('index', {
            books: books
        });
    } catch(err) {
        console.log(err);
        next(err);
    }
}

// add book page
function getAddBook(req, res, next) {
    res.render('add-book');
}

// save book then redirect to home page
async function postAddBook(req, res, next) {
    try {
        const title = req.body.title;
        const book = new Book(title);
        await Book.save(book);
        res.redirect('/');
    } catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    getBooks,
    getAddBook,
    postAddBook
}