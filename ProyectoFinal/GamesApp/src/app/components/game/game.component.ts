import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
  id:number;
  game:any = {
    _id: "",
    type: "",
    team1: {
      name: "",
      goals: 0
    },
    team2: {
      name: "",
      goals: 0
    },
    period: 0,
    online: false,
    finalized: false,
    events: [{
      teamName: "",
      type: "",
      detail: "",
      period: "",
      time: ""
    }]
  };
  result:any;
  errorMsg:string = "";
  successMsg:string = "";

  constructor( private activatedRoute:ActivatedRoute, private _gamesService:GamesService ) { }

  ngOnInit() {

  }

  createGame(){
    this.game.team1.goals = 0;
    this.game.team2.goals = 0;
    this.game.period = 1;
    this.game.online = true;
    this.game.finalized = false;
    try{
      this._gamesService.saveGame(this.game);
      this.successMsg = "Se agregó el juego correctamente";
      this.errorMsg = "";
    } catch (error){
      this.successMsg = "";
      this.errorMsg = "No se agregó el juego";
    }
  }

  manageError(error){
    this.successMsg = "";
    this.errorMsg = error.json().message;
  }

}
