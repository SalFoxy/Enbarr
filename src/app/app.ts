import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importa il Navbar Component standalone
import { NavbarComponent } from './components/navbar/navbar'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // Dichiara il NavbarComponent qui per usarlo nel template
  imports: [RouterOutlet, NavbarComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'enbarr';
}