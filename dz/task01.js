class Library {
    #books = [];
    constructor(initialBooks = []) {
        const uniqueBooks = new Set(initialBooks);
        if (uniqueBooks.size !== initialBooks.length) {
            throw new Error('Эта книга уже есть. Библиотека должна содержать уникальные книги');
        }
        this.#books = [...initialBooks]
    }

get allBooks() {
    return [...this.#books]
}

addBook(title) {
    if (this.hasBook(title)) {
        throw new Error(`Книга с названием ${title} уже существует в библиотеке`);
    }
    this.#books.push(title);
 }
 removeBook(title) {
    const bookIndex = this.#books.indexOf(title);
    if (bookIndex === -1) {
        throw new Error(`Книга с названием ${title} не найдена в библиотеке`);
    }
 
    this.#books.splice(bookIndex, 1);
 }
 hasBook(title) {
    return this.#books.includes(title);
 }
};

const library = new Library([
        "Война и мир",
        "Преступление и наказание",
        "Мастер и Маргарита",
]);

try {
    console.log(library.allBooks);

    library.addBook("Гамлет");
    console.log(library.allBooks);

    library.removeBook("Преступление и наказание");
    console.log(library.allBooks);

    library.addBook("Война и мир");
    console.log(library.allBooks);
} catch (err) {
    console.error(err.message);
};

try {
    library.addBook("Преступление и наказание");
    console.log(library.allBooks);
} catch (error) {
    console.error(error.message);
};