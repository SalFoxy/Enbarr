import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CharactersComponent } from './pages/characters/characters';
import { EnbarrSetComponent } from './pages/enbarr-set/enbarr-set'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'enbarr-set', component: EnbarrSetComponent }, 
];