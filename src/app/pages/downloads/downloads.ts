import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Download, Box, Layers, FileDigit, HardDrive } from 'lucide-angular';

interface DownloadItem {
  title: string;
  category: 'World' | 'Texture' | 'Other';
  version: string;
  size: string;
  description: string;
  image: string;
  downloadUrl: string;
}

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './downloads.html',
  styleUrl: './downloads.css'
})
export class DownloadsComponent {
  // Icone
  readonly DownloadIcon = Download;
  readonly WorldIcon = Box;
  readonly TextureIcon = Layers;
  readonly FileIcon = FileDigit;
  readonly SizeIcon = HardDrive;

  downloads: DownloadItem[] = [
    {
      title: 'InkubakMadness - World',
      category: 'World',
      version: '1.20.4',
      size: '125 MB',
      description: 'Esplora la capitale imperiale. Include il palazzo reale, i bassifondi e l\'arena.',
      image: '/img/enbarr-home.png',
      downloadUrl: '#'
    },
    {
      title: 'Ronfo Pack',
      category: 'Texture',
      version: '1.8 - 1.20',
      size: '15 MB',
      description: 'Texture pack ottimizzata per il combattimento. Spade corte, cieli custom e UI dorata.',
      image: '/img/enbarr-home2.png',
      downloadUrl: '#'
    },
    {
      title: 'Gay Pack',
      category: 'Other',
      version: 'Universal',
      size: '2 MB',
      description: 'Pacchetto ufficiale delle skin dei generali e dei cittadini di Enbarr.',
      image: '/img/adrestia-icon.jpg',
      downloadUrl: '#'
    }
  ];

  // Funzione per ottenere gli elementi di una specifica categoria
  getSection(cat: 'World' | 'Texture' | 'Other') {
    return this.downloads.filter(item => item.category === cat);
  }
}