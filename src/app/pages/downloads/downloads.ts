import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Download, Box, Layers, FileDigit, HardDrive, Sparkles, MonitorPlay } from 'lucide-angular';

interface DownloadItem {
  title: string;
  category: 'World' | 'Texture' | 'Other';
  version: string;
  size: string;
  description: string;
  image: string;
  downloadUrl: string;
  isNew?: boolean; // Aggiunto flag per badge "New"
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
  readonly NewIcon = Sparkles;

  // Dati
  downloads: DownloadItem[] = [
    {
      title: 'Kingdom of Enbarr',
      category: 'World',
      version: '1.20.4',
      size: '125 MB',
      description: 'La capitale imperiale completa. Palazzo reale, catacombe e arena.',
      image: 'assets/img/enbarr-home.png',
      downloadUrl: '#',
      isNew: true
    },
    {
      title: 'Enbarr PvP Pack',
      category: 'Texture',
      version: '1.8 - 1.20',
      size: '15 MB',
      description: 'Spade corte, cieli custom, minerali evidenziati. FPS Friendly.',
      image: 'assets/img/enbarr-home2.png',
      downloadUrl: '#'
    },
    {
      title: 'Adrestian Skin Pack',
      category: 'Other',
      version: 'Universal',
      size: '2 MB',
      description: 'Le skin ufficiali dei generali e dei cittadini.',
      image: 'assets/img/adrestia-icon.jpg',
      downloadUrl: '#'
    },
    {
      title: 'Enbarr OST',
      category: 'Other',
      version: 'MP3 / FLAC',
      size: '450 MB',
      description: 'Colonna sonora originale completa.',
      image: 'assets/img/enbarr-home2.png', // Placeholder
      downloadUrl: '#'
    }
  ];

  // Helper per le categorie da mostrare nel template
  categories = [
    { id: 'World', label: 'Mondi & Mappe', icon: this.WorldIcon },
    { id: 'Texture', label: 'Texture Packs', icon: this.TextureIcon },
    { id: 'Other', label: 'Extra & Risorse', icon: this.FileIcon }
  ];

  // Filtra la lista
  getByCategory(cat: string) {
    return this.downloads.filter(item => item.category === cat);
  }
}