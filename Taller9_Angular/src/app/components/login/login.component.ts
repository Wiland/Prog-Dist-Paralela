import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { UserService } from '../../services/user.service';
import { ServiceConfig } from '../../services/serviceConfig';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  counter:number = 0;
  user:any = {
    username: "",
    password: ""
  };
  logInTried:boolean = false;
  authentication:any = null;

  constructor( private _booksService:BooksService, private _userService:UserService,
                private _serviceConfig:ServiceConfig, private _router:Router ) { }

  ngOnInit() {
    this._booksService.getBookCount().map(counter => {
      this.counter = counter;
    }).subscribe();
  }

  logIn(){
    this._userService.authenticate(this.user).subscribe(
      data => {
        this.logInTried = true;
        this.authentication = this._userService.authentication;
        this._serviceConfig.setToken(this.authentication.token);
        console.log(this.authentication.token);
        this._router.navigate(['/books']);
      },
      error => {
        this.logInTried = true;
        this.authentication = this._userService.authentication;
      });
  }

}
