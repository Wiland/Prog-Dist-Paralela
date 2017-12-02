import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import io from "socket.io-client";
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
  socket:any;

  constructor( private activatedRoute:ActivatedRoute, private _gamesService:GamesService ) { }

  ngOnInit() {
    this.socket = io(`localhost:8880`);
  }

  createGame(){
    this.game.team1.goals = 0;
    this.game.team2.goals = 0;
    this.game.period = 1;
    this.game.online = true;
    this.game.finalized = false;
    try{
      this._gamesService.saveGame(this.game).subscribe(
        data => {
          this.successMsg = "Juego creado correctamente";
          this.errorMsg = "";
          this.socket.emit('UPDATE-GAMES');
        },
        error => {
          console.log(error.json().message);
          this.manageError(error);
        });
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
