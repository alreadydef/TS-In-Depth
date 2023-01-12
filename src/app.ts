import {Category} from './enums';
import {
    getAllBooks,
    getBookAuthorByIndex, getBookByID,
    getBookTitlesByCategory,
    logBookTitles,
    logFirstAvailable,
    сheckoutBooks,
    getTitle,
} from './functions';
import {Author, Librarian} from './interfaces';

showHello('greeting', 'TypeScript');
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
// Task 02.01
// const books = getAllBooks();
// logFirstAvailable(books);
// const titles = getBookTitlesByCategory(Category.Javascript);
// logBookTitles(titles);
// getBookAuthorByIndex(1);

// Task 03.01
// const myId = createCustomerID('Ann', 10);
// console.log(myId);
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Bob', 11));

// Task 03.02
// createCustomer('Ann');
// createCustomer('Ann', 25);
// createCustomer('Ann', 25, 'Dnipro');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));
// const myBooks = сheckoutBooks('Ann', ...[1, 2, 4]);
// console.log(myBooks);

// Task 03.03
// const checkedOutBooks = getTitle(false);
// console.log(checkedOutBooks);
// console.log(getTitle(2, true));
// console.log(getTitle('Lea Vernou'));
// console.log(getTitle(true));

// Task 03.04
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(123));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markedDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`);
//     },
// };
// printBook(myBook);
// myBook.markedDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'exapmle@mail.com',
//     numBooksPublished: 15,
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Anna',
//     email: 'exapmle@mail.com',
//     department: '13'
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer?.magazine.getTitle());
// console.log(offer.book?.getTitle?.());
// console.log(offer.book?.authors?.[0]);
// Task 04.05
// console.log(getProperty(getAllBooks()?.[1], 'title'));
// console.log(getProperty(getAllBooks()?.[1], 'markedDamaged'));
// console.log(getProperty(getAllBooks()?.[1], 'isbn'));
// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'Learn Typescript', 2023);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref.publisher);
// console.log(ref.getID());
// Task 05.02, 05.03
// const refBook = new RefBook(2, 'Learn Ts', 2022, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn typeScript');
// Task 05.05
// const personBook: PersonBook = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     name: 'Anna',
//     title: 'Learn Angular',
// };
// console.log(personBook);
// const o: Toptions = { speed: 111 };
// setDefaultConfig(o);
// console.log(o);

// Task 06.03
// const refBook = new RefBook(2, 'Learn Ts', 2022, 2);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(refBook);
// printRefBook(favoriteLibrarian);

// Task 06.05
// const flag = true;
//
// if (flag) {
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = 'Anna';
//             console.log(reader);
//         });
// }

// Task 06.06
// const lib = new Library();
// let lib2: Library;

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const result1 = purge(inventory);
// console.log(result1);
// const result2 = purge([1,2,3]);
// console.log(result2);

// Task 07.02, 07.03
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);
//
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
//
// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[0], 'author'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markedDamaged: null,
//     title: 'Unknown',
//     pages: 123,
// };
//
// const updatedBook: UpdatedBook = {};
// const params: Parameters<СreateCustomerFunctionType> = ['Anna', 29, 'Dnipro'];
// createCustomer(...params);

// Task 08.01
// const obj = new UniversityLibrarian();
// console.log(obj);
// obj.name = 'Anna';
// obj['printLibrarian']();

// Task 08.03
// const obj = new UniversityLibrarian();
// obj.assistFaculty = null;
// obj.teachCommunity = null;

// Task 08.04
// const refBook = new Encyclopedia(2, 'Learn Ts', 2022, 2);
// refBook.printItem();

// Task 08.05
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// obj.assistCustomer('Boris', 'Learn Typescript');
// console.log(obj);

// Task 08.06
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// console.log(obj.name);

// Task 08.07
// const refBook = new Encyclopedia(2, 'Learn Ts', 2022, 2);
// refBook.copies = 10;
// console.log(refBook);

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.Javascript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.Javascript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(err => console.log(err))
//     .finally(() => console.log('complete'));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(err => console.log(err))
//     .finally(() => console.log('complete'));
// console.log('End');

// Task 09.03
// logSearchResults(Category.Javascript);