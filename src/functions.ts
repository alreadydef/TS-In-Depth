/* eslint-disable no-redeclare */
import {Book, LibMrgCallback, Toptions} from './interfaces';
import {Category} from './enums';
import {BookOrUndefined, BookProperties} from './types';
import  RefBook from './classes/encyclopedia';
export function getAllBooks(): readonly Book[] {
    const allBooks  = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.Javascript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.Javascript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Javascript },
    ];
    return allBooks;
}

export function logFirstAvailable(bookList: readonly Book[] = getAllBooks()): void {
    const numberOfBooks = bookList.length;
    const title = bookList.find(book => book.available)?.title;

    console.log(`number of books ${ numberOfBooks }`);
    console.log(`first available book: ${ title }`);
}

export function getBookTitlesByCategory(category: Category = Category.Javascript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    const titlesInOneLine = titles.reduce((previousTitle, currentTitle, currentIndex) => {
        if (currentIndex === titles.length -1) {
            return previousTitle + currentTitle;
        }
        return  `${previousTitle}  ${ currentTitle }, `;
    }, '');
    console.log(titlesInOneLine);
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const allBooks = getAllBooks();
    const {title, author} = allBooks[index];

    return [title, author];
}

export function calcTotalPages() {
    const LIBRARIES_DATA = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ] as const;

    return LIBRARIES_DATA.map(
        ({ books, avgPagesPerBook }) => BigInt(books) * BigInt(avgPagesPerBook),
    ).reduce((acc, libraryPages) => acc + libraryPages, BigInt(0));
}

export function  createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function getBookByID(id: Book['id']): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log(`Customer name: ${ customer }`);
    const titles = booksIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
    return titles;
}

export function getTitle(author: string): string[];
export function getTitle(available: boolean): string[];
export function getTitle(id: number, available: boolean): string[];
export function getTitle(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof  arg === 'string') {
            return books.filter(({author}) => author === arg).map(({title}) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({available}) => available === arg).map(({title}) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof  id === 'number' && typeof available === 'boolean') {
            return books.filter(({available, id}) => available === available && id === id).map(({title}) => title);
        }
    }
    return [];
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof  value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function  bookTitleTransform(title: any) {
    assertStringValue(title);
    return title.split('').reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties | 'isbn'): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: Toptions): Toptions {
    options.duration ??= 200;
    options.speed ??= 90;
    return options;
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}

export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];

    return typeof value === 'function' ? value.name : value;
}

export function getBooksByCategory(category: Category, callback: LibMrgCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}