import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServiceConfig } from "../services/serviceConfig";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  authentication:any = null;
  user:any;
  result:any;

  constructor( private http:Http, private _serviceConfig:ServiceConfig ) {}

  authenticate(user){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/user/authentication`;
    let headers = new Headers();

    headers.append("Accept", "application/json" );
    headers.append("Content-Type", "application/json" );

    return this.http.post( url, user, { headers: headers } )
      .map( (res:any) => {
        this.authentication = res.json();
        return this.authentication;
      })
      .catch( (error:any) => {
        this.authentication = error.json();
        console.log(this.authentication);
        return this.authentication;
      });
  }

  createUser(user){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/user`;
    let headers = new Headers();

    headers.append("Accept", "application/json" );
    headers.append("Content-Type", "application/json" );

    return this.http.post( url, user, { headers: headers } )
      .map( (res:any) => {
        this.user = res.json();
        return this.user;
      })
      .catch( (error:any) => {
        this.result = error.json();
        console.log(this.result);
        return this.result;
      });
  }
}
