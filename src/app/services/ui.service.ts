import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    // Segnale per lo stato del menu mobile
    readonly isMobileMenuOpen = signal(false);

    toggleMobileMenu() {
        this.isMobileMenuOpen.update(val => !val);
    }

    setMobileMenuOpen(isOpen: boolean) {
        this.isMobileMenuOpen.set(isOpen);
    }
}
