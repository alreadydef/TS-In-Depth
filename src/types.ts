import {Author, Book, Person} from './interfaces';
import {createCustomer, getBooksByCategoryPromise} from "./functions";
import {Category} from "./enums";

export type BookProperties = keyof Book;

export type PersonBook = Book & Person;

export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;

export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;

export type СreateCustomerFunctionType = typeof createCustomer;

export type fn = (a: string, b: number, c: boolean) => symbol;
export  type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol ? R : never;
export  type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol ? R : never;
export  type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol ? R : never;
export  type P1 = Param1<fn>;
export  type P2 = Param2<fn>;
export  type P3 = Param3<fn>;

export type RequiredProps<T extends  object> = {
    [K in keyof T]: {} extends Pick<T, K> ? never: K
}[keyof T];

export type OptionalProps<T extends  object> = {
    [K in keyof T]: {} extends Pick<T, K> ? K: never
}[keyof T];

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

type RemoveProps<T extends object, TPros extends keyof T> = {
    [prop in keyof T as Exclude<prop, TPros>]: T[prop]
};

type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

export type Unpromisify<T> = T extends Promise<infer U> ? U : never;
type FBCP = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;

export async function logSearchResults(category: Category) {
    const result =  await getBooksByCategoryPromise(category);
    console.log(result.length);
}