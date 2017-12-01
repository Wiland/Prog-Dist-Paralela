import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServiceConfig } from "../services/serviceConfig";
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
  books:any[] = [];
  counter:number = 0;
  result:any;

  constructor( private http:Http, private _serviceConfig:ServiceConfig ) {}

  getBookCount(){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/count`;

    let headers = new Headers();
    headers.append("Accept", "application/json" );

    return this.http.get( url, { headers } ).map( res => {
      this.counter = res.json();
      return this.counter;
    });
  }

  getAllBooks(){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/books`;
    let headers = new Headers();

    headers.append("authorization", this._serviceConfig.token );
    headers.append("Accept", "application/json" );

    return this.http.get( url, { headers } )
      .map( res => {
        this.books = res.json();
        console.log(this.books);
        return this.books;
      });
  }

  deleteBook(id:string){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/books/${ id }`;
    let headers = new Headers();

    headers.append("authorization", this._serviceConfig.token );
    headers.append("Accept", "application/json" );

    return this.http.delete( url, { headers } )
      .map( res => {
        this.result = res.json();
        console.log(this.result);
        return this.result;
      });
  }

  createBook(book){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/books`;
    let headers = new Headers();

    headers.append("authorization", this._serviceConfig.token );
    headers.append("Accept", "application/json" );

    return this.http.post( url, book, { headers: headers } )
      .map( res => {
        this.result = res.json();
        console.log(this.result);
        return this.result;
      });
  }

  updateBook(book){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/books/${ book._id }`;
    let headers = new Headers();

    headers.append("authorization", this._serviceConfig.token );
    headers.append("Accept", "application/json" );

    return this.http.put( url, book, { headers: headers } )
      .map( res => {
        this.result = res.json();
        console.log(this.result);
        return this.result;
      });
  }
}
