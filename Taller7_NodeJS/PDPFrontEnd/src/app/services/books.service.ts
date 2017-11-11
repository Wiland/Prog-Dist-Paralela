import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  private books:Observable<Book[]>;

  private baseUrl: string = 'http://localhost:8000';
  constructor(private http : Http){

  }

  getBooks(): Observable<Book[]>{
    this.books = this.http.get(`${this.baseUrl}/books`).map(res => res.json());
    return this.books;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getHeroe(idx:number):Book{
    return this.books[idx];
  }

  // buscarHeroes(termino:string){
  //   let heroesArr:Book[] = [];
  //
  //   termino = termino.toLowerCase();
  //   for(let heroe of this.heroes ){
  //     let nombre = heroe.nombre.toLowerCase();
  //     if ( nombre.indexOf(termino) >= 0 ){
  //       heroesArr.push(heroe);
  //     }
  //   }
  //
  //   return heroesArr;
  // }
}

export interface Book {
  title:string;
  author:string;
  pages:number;
  price:number;
}
