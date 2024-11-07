import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    private books = [];

  getAllBooks() {
    return this.books;
  }

  addBooks(book: { title: string; author: string; year: number }) {
    const newBook = { id: Date.now(), ...book };
    this.books.push(newBook);
    return this.books;
  }

  getBookById(id: number) {
    return this.books.find(book => book.id === id);
  }
}
