import { bootstrapApplication } from '@angular/platform-browser';
// 🎯 CORREZIONE: Importa AppComponent dal percorso corretto
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));