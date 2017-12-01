import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html'
})
export class GameViewComponent implements OnInit {
  id:number;
  game:any = {
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
    this.activatedRoute.params
      .map(parametros => { this.id = parametros['id']; console.log(this.id)})
      .subscribe( id => {
        this.game = this._gamesService.getGameDetail(this.id);
        if ( this.game != null ) {

        } else {
          this.manageError({message: "No se encontró el juego"});
        }
      });
  }

  manageError(error){
    this.successMsg = "";
    this.errorMsg = error.json().message;
  }

  addPoint(id){
    if (id == 1) {
        this.game.team1.goals += 1;
    } else if (id == 2){
      this.game.team2.goals += 1;
    }
    try{
      this._gamesService.editGame(this.game).subscribe(
        data => {
          this.successMsg = "Libro actualizado correctamente";
          this.errorMsg = "";
        },
        error => {
          console.log(error.json().message);
          this.manageError(error);
        });
    } finally{}
  }

  finishGame(){
    this.game.online = false;
    this.game.finalized = true;
    try{
      this._gamesService.editGame(this.game).subscribe(
        data => {
          this.successMsg = "Libro actualizado correctamente";
          this.errorMsg = "";
        },
        error => {
          console.log(error.json().message);
          this.manageError(error);
        });
    } finally{}
  }

  newPeriod(){
    this.game.period += 1;
    try{
      this._gamesService.editGame(this.game).subscribe(
        data => {
          this.successMsg = "Libro actualizado correctamente";
          this.errorMsg = "";
        },
        error => {
          console.log(error.json().message);
          this.manageError(error);
        });
    } finally{}
  }

}
