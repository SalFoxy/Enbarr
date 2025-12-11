import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
// Aggiungi Menu e X alle importazioni
import { LucideAngularModule, Home, Scroll, Sword, Users, Castle, Menu, X, Download} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  // Icone per il toggle del menu
  readonly MenuIcon = Menu;
  readonly CloseIcon = X;

  // Icone navigazione
  readonly HomeIcon = Home;
  readonly LoreIcon = Scroll;
  readonly GamesIcon = Sword;
  readonly CharIcon = Users;
  readonly SetIcon = Castle;
  readonly DownloadIcon = Download;

  // Stato del menu mobile
  isMenuOpen = false;

  navItems = [
    { label: 'Home', route: '/', icon: this.HomeIcon },
    { label: 'EnbarrSet', route: '/enbarr-set', icon: this.SetIcon },
    { label: 'Download', route: '/downloads', icon: this.DownloadIcon },
    { label: 'Lore', route: '/lore', icon: this.LoreIcon },
    { label: 'Games', route: '/games', icon: this.GamesIcon },
    { label: 'Personaggi', route: '/characters', icon: this.CharIcon }
  ];

  // Funzione per alternare il menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Chiude il menu quando si clicca su un link
  closeMenu() {
    this.isMenuOpen = false;
  }
}