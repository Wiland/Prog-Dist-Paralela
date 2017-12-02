import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServiceConfig } from "../services/serviceConfig";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GamesService {
  games:any[] = [];
  result:any;

  constructor( private http:Http, private _serviceConfig:ServiceConfig ) {
    // this.games = [{
    //   type: "BASKETBALL",
    //   team1: {name: "TEAM1", goals: 0},
    //   team2: {name: "TEAM2", goals: 0},
    //   period: 1,
    //   online: true
    // },
    // {
    //   type: "FOOTBALL",
    //   team1: {name: "TEAM1"},
    //   team2: {name: "TEAM2"},
    //   period: 1,
    //   online: false
    // }];
  }

  getAllGames(){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/games`;
    let headers = new Headers();

    headers.append("Accept", "application/json" );

    return this.http.get( url, { headers } )
      .map( res => {
        this.games = res.json();
        console.log(this.games);
        return this.games;
      });
  }

  getAllGames2(){
    return this.games;
  }

  getGameDetail(id){
    return this.games[id];
  }

  saveGame(game){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/games`;
    let headers = new Headers();

    headers.append("Accept", "application/json" );

    return this.http.post( url, game, { headers: headers } )
      .map( res => {
        this.result = res.json();
        console.log(this.result);
        return this.result;
      });
  }

  editGame(game){
    let url = `${ this._serviceConfig.BASE_SERVICE_URL }/game/${ game._id }`;
    let headers = new Headers();

    headers.append("Accept", "application/json" );

    return this.http.put( url, game, { headers: headers } )
      .map( res => {
        this.result = res.json();
        console.log(this.result);
        return this.result;
      });
  }

  deleteGame(id){
    // let url = `${ this._serviceConfig.BASE_SERVICE_URL }/games/${ id }`;
    // let headers = new Headers();
    //
    // headers.append("Accept", "application/json" );
    //
    // return this.http.delete( url, { headers } )
    //   .map( res => {
    //     this.result = res.json();
    //     console.log(this.result);
    //     return this.result;
    //   });
  }
}
