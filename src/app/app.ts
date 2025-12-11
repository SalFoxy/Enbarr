import { Component, OnInit, signal } from '@angular/core'; // Aggiungi OnInit
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import AOS from 'aos'; // Importa AOS
import { SocialWidgetComponent } from './components/social-widget/social-widget';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SocialWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { // Implementa OnInit
  
  ngOnInit() {
    AOS.init({
      duration: 1000, // Durata animazione in ms
      easing: 'ease-out-back', // Tipo di movimento fluido
      once: true, // L'animazione avviene solo una volta
      offset: 120 // Inizia l'animazione un po' prima
    });
  }
}