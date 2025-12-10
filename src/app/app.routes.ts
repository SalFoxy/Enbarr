import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CharactersComponent } from './pages/characters/characters'; // Importa

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent }, // Nuova rotta
];