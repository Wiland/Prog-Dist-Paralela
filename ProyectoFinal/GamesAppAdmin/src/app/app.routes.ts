import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { GamesListComponent } from './components/games-list/games-list.component';

const APP_ROUTES: Routes = [
  { path: 'game/:id', component: GameViewComponent },
  { path: 'game', component: GameComponent },
  { path: 'games', component: GamesListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'games' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
