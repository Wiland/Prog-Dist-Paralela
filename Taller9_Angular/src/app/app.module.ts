import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';

import { APP_ROUTING } from "./app.routes";
import { SignUpComponent } from './components/sign-up/sign-up.component';

//Services
import { ServiceConfig } from './services/serviceConfig';
import { BooksService } from './services/books.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    BooksService,
    UserService,
    ServiceConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
