import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; // Aggiungiamo RouterLink

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink], // Aggiornato con i moduli di routing
  
  // 🎯 CORREZIONE: Qui usiamo i nomi dei file SENZA .component
  templateUrl: './navbar.html', 
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  navItems = [
    { label: 'EnbarrSet', route: '/' },
    { label: 'Lore', route: '/lore' },
    { label: 'Games', route: '/games' },
    { label: 'Personaggi', route: '/characters' }
  ];
}