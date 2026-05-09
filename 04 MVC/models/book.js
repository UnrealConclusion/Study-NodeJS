const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data'); // path to the data folder
const BOOKS_FILE = path.join(DATA_DIR, 'books.json'); // path to the books.json file

class Book {
    #title;
    constructor(title) {
        this.#title = title;
    }

    get title() {
        return this.#title;
    }

    // save a book in the database
    static async save(book) {
        await fs.mkdir(DATA_DIR, { recursive: true });
        const books = await Book.fetchAll();
        
        books[book.title] = book;

        await fs.writeFile(BOOKS_FILE, JSON.stringify(books, null, 2));
    }

    // fetch all books from the database
    static async fetchAll() {
        try {
            const fileContent = await fs.readFile(BOOKS_FILE, 'utf8');
            return JSON.parse(fileContent);
        } catch (err) {
            if (err.code === 'ENOENT') {
                return {}; // no file yet → empty object
            }
            throw err;
        }
    }
}

module.exports = Book;