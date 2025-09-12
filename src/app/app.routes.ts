import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Ayuda } from './components/ayuda/ayuda';
import { Calendario } from './components/calendario/calendario';
import { NflComponent } from './components/nfl/nfl';
import { SoccerSport } from './components/soccer/soccer-sport';
import { BoxeoSport } from './components/boxeo/boxeo-sport';
import { TendenciasComponent } from './components/tendencias/tendencias';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'ayuda', component: Ayuda },
  { path: 'calendario', component: Calendario },
  { path: 'soccer', component: SoccerSport },
  { path: 'nfl', component: NflComponent },
  { path: 'boxeo', component: BoxeoSport },
  { path: 'tendencias', component: TendenciasComponent },
  { path: '**', redirectTo: '' }
];
