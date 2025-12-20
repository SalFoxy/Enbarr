import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
// Aggiungi Menu e X alle importazioni
import { LucideAngularModule, Home, Scroll, Sword, Users, Castle, Menu, X, Download } from 'lucide-angular';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  private uiService = inject(UiService);

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

  // Stato del menu mobile delegato al service
  // Usiamo il signal del service direttamente o ne facciamo un alias se serve nel template
  // Per ora manteniamo la compatibilità con il template esistente usando un getter o aggiornando il template
  // MA per semplicità, mappiamo isMenuOpen al signal del service
  get isMenuOpen() {
    return this.uiService.isMobileMenuOpen();
  }

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
    this.uiService.toggleMobileMenu();
  }

  // Chiude il menu quando si clicca su un link
  closeMenu() {
    this.uiService.setMobileMenuOpen(false);
  }
}