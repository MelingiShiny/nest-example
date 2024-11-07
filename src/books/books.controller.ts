import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService){}

    // private books = [];

    @Get()
    getAllBooks(){
        return this.booksService.getAllBooks();
        // return this.books;
    }

    @Post()
    addBooks(@Body() book: { title: string; author: string; year: number }){
        return this.booksService.addBooks(book);
        // const newBook = { id: Date.now(), ...book };
    // this.books.push(newBook);
    // return newBook;
    }

    @Get(':id')
    getBookById(@Param('id', ParseIntPipe) id: number) {
        return this.booksService.getBookById(id);
    //   return this.books.find(book => book.id === id);
    }
}
