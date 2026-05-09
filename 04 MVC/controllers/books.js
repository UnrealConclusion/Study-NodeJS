
// home page
function getBooks(req, res, next) {
    res.render('index');
}

// add book page
function getAddBook(req, res, next) {
    res.render('add-book');
}

// save book then redirect to home page
function postAddBook(req, res, next) {
    res.redirect('/');
}

module.exports = {
    getBooks,
    getAddBook,
    postAddBook
}