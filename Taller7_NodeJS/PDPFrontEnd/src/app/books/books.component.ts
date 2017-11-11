import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from "../services/books.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: []
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]>;

  constructor( private _booksService:BooksService ) {

  }

  ngOnInit() {
    this.books = this._booksService.getBooks();
    console.log(this.books);
  }

}
