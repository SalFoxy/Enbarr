import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Download, Box, Layers, FileDigit, HardDrive, Sparkles, MonitorPlay, Star, Shield, Music, Scroll, Code, Database, LayoutGrid } from 'lucide-angular';
import { NgxParticlesModule } from "@tsparticles/angular";
import { MoveDirection, OutMode, Container, ISourceOptions } from "@tsparticles/engine";

type CategoryType = 'All' | 'World' | 'Texture' | 'Plugin' | 'OST' | 'Other';

interface DownloadItem {
  title: string;
  category: CategoryType;
  version: string;
  size: string;
  description: string;
  image: string;
  downloadUrl: string;
  isNew?: boolean;
}

interface CategoryTab {
  id: CategoryType;
  label: string;
  icon: any;
}

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, NgxParticlesModule],
  templateUrl: './downloads.html',
  styleUrl: './downloads.css'
})
export class DownloadsComponent {
  // Particles Config
  particlesOptions: ISourceOptions = {
    fpsLimit: 120,
    particles: {
      color: {
        value: "#d4af37",
      },
      move: {
        direction: MoveDirection.top,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 40,
      },
      opacity: {
        value: 0.3,
        animation: {
          enable: true,
          speed: 0.5,
          sync: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  // Icons
  readonly DownloadIcon = Download;
  readonly SizeIcon = HardDrive;
  readonly NewIcon = Sparkles;
  readonly StarIcon = Star;

  // State
  selectedCategory = signal<CategoryType>('All');

  // Categories Configuration
  categories: CategoryTab[] = [
    { id: 'All', label: 'Tutti', icon: LayoutGrid },
    { id: 'World', label: 'Mondi', icon: Box },
    { id: 'Texture', label: 'Texture Packs', icon: Layers },
    { id: 'Plugin', label: 'Plugin & Data', icon: Code },
    { id: 'OST', label: 'Colonna Sonora', icon: Music },
    { id: 'Other', label: 'Extra', icon: Scroll },
  ];

  // Featured Item (Always Visible at top)
  featuredDownload: DownloadItem = {
    title: 'Kingdom of Enbarr: Imperial Capital',
    category: 'World',
    version: '1.20.4',
    size: '125 MB',
    description: 'Esplora la maestosa capitale imperiale. Include il Palazzo Reale, le Catacombe, l\'Arena dei Gladiatori e i distretti mercantili. Un\'esperienza immersiva unica.',
    image: 'assets/img/enbarr-home.png',
    downloadUrl: '#',
    isNew: true
  };

  // Full Resource List
  allResources: DownloadItem[] = [
    // Texture Packs
    {
      title: 'Enbarr PvP Pack',
      category: 'Texture',
      version: '1.20',
      size: '15 MB',
      description: 'Texture pack ottimizzata per il combattimento. Spade corte, cieli personalizzati.',
      image: 'assets/img/enbarr-home2.png',
      downloadUrl: '#'
    },
    {
      title: 'Royal Nobles Skin Pack',
      category: 'Texture',
      version: 'Universal',
      size: '5 MB',
      description: 'Pack di risorse che aggiunge vestiti nobiliari per tutti i cittadini.',
      image: 'assets/img/adrestia-icon.jpg',
      downloadUrl: '#',
      isNew: true
    },
    {
      title: 'Dark Stone UI',
      category: 'Texture',
      version: '1.20',
      size: '8 MB',
      description: 'Interfaccia utente scura in stile gotico per un\'immersione totale.',
      image: 'assets/img/enbarr-home.png',
      downloadUrl: '#'
    },

    // Plugins / Data
    {
      title: 'Enbarr Roleplay Core',
      category: 'Plugin',
      version: '2.5.0',
      size: '450 KB',
      description: 'Plugin essenziale per gestire chat locale, dadi e schede personaggio.',
      image: 'assets/img/enbarr-home2.png',
      downloadUrl: '#',
      isNew: true
    },
    {
      title: 'Imperial Economy',
      category: 'Plugin',
      version: '1.1.0',
      size: '200 KB',
      description: 'Gestione valuta imperiale, tasse e mercato globale.',
      image: 'assets/img/enbarr-home.png',
      downloadUrl: '#'
    },

    // OST
    {
      title: 'Enbarr OST: Vol 1',
      category: 'OST',
      version: 'FLAC',
      size: '450 MB',
      description: 'La colonna sonora originale completa. Oltre 20 tracce orchestrali epiche.',
      image: 'assets/img/enbarr-home2.png',
      downloadUrl: '#'
    },
    {
      title: 'Tavern Songs Collection',
      category: 'OST',
      version: 'MP3',
      size: '120 MB',
      description: 'Raccolta di canzoni popolari suonate nelle taverne della città bassa.',
      image: 'assets/img/adrestia-icon.jpg',
      downloadUrl: '#'
    },

    // Others
    {
      title: 'Adrestian Skin Collection',
      category: 'Other',
      version: 'Universal',
      size: '2 MB',
      description: 'Collezione di skin ufficiali: Generali Imperiali, Nobili, Mercanti e Cittadini.',
      image: 'assets/img/adrestia-icon.jpg',
      downloadUrl: '#'
    }
  ];

  // Computed signal for filtering
  filteredResources = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') {
      return this.allResources;
    }
    return this.allResources.filter(item => item.category === cat);
  });

  selectCategory(id: CategoryType) {
    this.selectedCategory.set(id);
  }

  getIconForCategory(cat: string) {
    switch (cat) {
      case 'Texture': return Layers;
      case 'Plugin': return Code;
      case 'OST': return Music;
      case 'World': return Box;
      default: return Scroll;
    }
  }
}