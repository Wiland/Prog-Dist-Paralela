import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Utilities for services and forms
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//Routes
import { APP_ROUTING } from "./app.routes";

//Services
import { GamesService } from './services/games.service';
import { ServiceConfig } from './services/serviceConfig';

//Components
import { AppComponent } from './app.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './components/game/game.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GameComponent,
    GameViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [GamesService, ServiceConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
