import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html', // Controlla se il file generato si chiama navbar.html o navbar.component.html
  styleUrl: './navbar.css'      // Idem per il css
})
export class NavbarComponent {
  navItems = [
    { label: 'EnbarrSet', route: '/' },
    { label: 'Lore', route: '/lore' },
    { label: 'Games', route: '/games' },
    { label: 'Personaggi', route: '/characters' }
  ];
}