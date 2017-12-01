import { Injectable } from '@angular/core';

@Injectable()
export class ServiceConfig {
  BASE_SERVICE_URL = "http://localhost:4000";
  token:string = "";

  constructor(){};

  setToken(token:string){
    this.token = `Bearer ${ token }`;
  }

  clearToken(){
    this.token = "";
  }
}
