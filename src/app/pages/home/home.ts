import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card'; // Verifica il percorso esatto del file card.ts

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  loreCards = [
    { title: 'La Fondazione', description: 'Nata dal fuoco dei vulcani antichi, Enbarr sorge imponente sulle ceneri.' },
    { title: 'Il Patto Aureo', description: 'Un accordo millenario che lega i mercanti alla corona, garantendo ricchezza.' },
    { title: 'I Bassifondi', description: 'Dove la luce dell\'oro non arriva, le gilde delle ombre controllano ogni respiro.' },
    { title: 'La Guardia', description: 'Guerrieri scelti vestiti di cremisi che proteggono i confini della città.' }
  ];
}