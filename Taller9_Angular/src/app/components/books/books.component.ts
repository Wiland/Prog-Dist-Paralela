import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  book:any;
  books:any[] = [];
  result:any;
  errorMsg:string = "";
  successMsg:string = "";
  newBook:any = {
    author: "",
    title: "",
    pages: "",
    price: ""
  }
  showNewForm:boolean = false;
  create:boolean = true;

  constructor( private _booksService:BooksService, private _router:Router ) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this._booksService.getAllBooks()
      .subscribe( data => {
        this.books = data;
      },
      error => {
        this.manageError(error);
      });
  }

  bookDetail(id:number){
    this.create = false;
    this.newBook = this.books[id];
    this.showNewForm = true;
  }

  updateBook(){
    this._booksService.updateBook(this.newBook).subscribe(
      data => {
        this.successMsg = "Libro actualizado correctamente";
        this.errorMsg = "";
        this.getAllBooks();
        this.newBook = "";
        this.showNewForm = false;
      },
      error => {
        console.log(error.json().message);
        this.manageError(error);
      });
  }

  manageError(error){
    this.successMsg = "";
    this.errorMsg = error.json().message;

    if (error.status == 403) {
      this._router.navigate(['login']);
    }
  }

  createBook(){
    this._booksService.createBook(this.newBook).subscribe(
      data => {
        this.successMsg = "Libro creado correctamente";
        this.errorMsg = "";
        this.getAllBooks();
        this.newBook = "";
        this.showNewForm = false;
      },
      error => {
        console.log(error.json().message);
        this.manageError(error);
      });
  }

  deleteBook(id:number){
    this.book = this.books[id];

    this._booksService.deleteBook(this.book._id)
      .subscribe( data => {
        this.successMsg = data.message;
        this.errorMsg = "";
        this.getAllBooks();
      },
      error => {
        this.manageError(error);
      });
  }

  addBook(){
    this.create = true;
    this.showNewForm = true;
  }

  cancelNewBook(){
    this.newBook = "";
    this.showNewForm = false;
  }

}
