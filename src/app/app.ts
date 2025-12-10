import { Component, signal } from '@angular/core'; // signal lo lasciamo anche se non lo usiamo subito
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar'; // Verifica percorso

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Aggiungi NavbarComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Possiamo rimuovere il signal 'title' se non serve più, o lasciarlo
  protected readonly title = signal('enbarr'); 
}