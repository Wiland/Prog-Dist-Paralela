import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games:any[] = [];
  id:number;
  game:any;
  result:any;
  errorMsg:string = "";
  successMsg:string = "";

  constructor( private activatedRoute:ActivatedRoute, private _gamesService:GamesService ) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    // this.games = this._gamesService.getAllGames2();
    this._gamesService.getAllGames()
      .subscribe( data => {
        this.games = data;
      },
      error => {
        this.manageError(error);
      });
  }

  manageError(error){
    this.successMsg = "";
    this.errorMsg = error.json().message;
  }

}
