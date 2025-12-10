import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
// Importa il modulo e le icone specifiche
import { LucideAngularModule, Home, Scroll, Sword, Users, Castle } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  // Esportiamo le icone per usarle nell'HTML
  readonly HomeIcon = Home;
  readonly LoreIcon = Scroll;
  readonly GamesIcon = Sword;
  readonly CharIcon = Users;
  readonly SetIcon = Castle;

  navItems = [
    { label: 'Home', route: '/', icon: this.HomeIcon },
    { label: 'EnbarrSet', route: '/enbarr-set', icon: this.SetIcon },
    { label: 'Lore', route: '/lore', icon: this.LoreIcon },
    { label: 'Games', route: '/games', icon: this.GamesIcon },
    { label: 'Personaggi', route: '/characters', icon: this.CharIcon }
  ];
}