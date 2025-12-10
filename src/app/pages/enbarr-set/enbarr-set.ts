import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// Aggiungi icone per le cartelle/gruppi
import { LucideAngularModule, Play, Clock, MonitorPlay, Sparkles, Film, Folder, ChevronDown, ChevronUp, Layers } from 'lucide-angular';

export interface NewsVideo {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
}

// Nuova interfaccia per i Gruppi
export interface VideoGroup {
  isGroup: true; // Flag per riconoscerlo facilmente
  title: string;
  description: string;
  thumbnail: string; // Copertina della raccolta
  videos: NewsVideo[]; // I video dentro la cartella
  isOpen?: boolean; // Stato per l'apertura/chiusura (gestito nel componente)
}

// Un item può essere un Video o un Gruppo
type SpecialItem = NewsVideo | VideoGroup;

@Component({
  selector: 'app-enbarr-set',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './enbarr-set.html',
  styleUrl: './enbarr-set.css'
})
export class EnbarrSetComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);

  // Icone
  readonly PlayIcon = Play;
  readonly ClockIcon = Clock;
  readonly MonitorIcon = MonitorPlay;
  readonly SpecialIcon = Sparkles;
  readonly TrailerIcon = Film;
  readonly FolderIcon = Folder;
  readonly GroupIcon = Layers;
  readonly ArrowDown = ChevronDown;
  readonly ArrowUp = ChevronUp;

  currentVideo!: NewsVideo;
  currentSafeUrl!: SafeResourceUrl;

  // Lista Notizie (TG) - Rimane uguale
  newsList: NewsVideo[] = [
    {
      id: 'dQw4w9WgXcQ', 
      title: 'Edizione Straordinaria: Avvistato Drago',
      description: 'Le guardie cittadine segnalano attività sismiche e fiamme nei cieli.',
      date: '10 Ottobre 1024'
    },
  ];

  // --- LISTA MISTA: Video Singoli e Gruppi ---
  specialsList: SpecialItem[] = [
    // Esempio 1: Un GRUPPO (Cartella)
    {
      isGroup: true,
      title: 'Inkubak Madness',
      description: 'La raccolta completa della follia di Inkubak.',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', // Metti una cover rappresentativa
      isOpen: false,
      videos: [
        { id: 'dQw4w9WgXcQ', title: 'Episodio 1: L\'inizio', description: 'Dove tutto ebbe inizio.', date: 'Serie Tv' },
        { id: 'M7lc1UVf-VE', title: 'Episodio 2: Il Caos', description: 'La situazione peggiora.', date: 'Serie Tv' },
        { id: 'aqz-KE-bpKQ', title: 'Episodio 3: La Fine?', description: 'Climax incredibile.', date: 'Serie Tv' }
      ]
    },
    // Esempio 2: Un Video Singolo (Trailer)
    {
      id: 'jNQXAC9IVRw', 
      title: 'TEASER: Il Risveglio del Titano',
      description: 'Primo sguardo all\'evento cinematografico dell\'anno.',
      date: 'Prossimamente'
    },
    // Esempio 3: Altro Gruppo
    {
      isGroup: true,
      title: 'Enbarr Games',
      description: 'Highlights dai tornei della città.',
      thumbnail: 'https://img.youtube.com/vi/YE7VzlLtp-4/mqdefault.jpg',
      isOpen: false,
      videos: [
        { id: 'YE7VzlLtp-4', title: 'Torneo Spade', description: 'Finale emozionante.', date: 'Sport' },
        { id: 'C0DPdy98e4c', title: 'Corsa dei Chocobo', description: 'Gara di velocità.', date: 'Sport' }
      ]
    }
  ];

  ngOnInit() {
    this.selectVideo(this.newsList[0]);
  }

  selectVideo(video: NewsVideo) {
    this.currentVideo = video;
    const url = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
    this.currentSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Helper per capire se è un gruppo nel template
  isGroup(item: SpecialItem): item is VideoGroup {
    return (item as VideoGroup).isGroup === true;
  }

  // Apre/Chiude la cartella
  toggleGroup(group: VideoGroup) {
  console.log('Cliccato:', group.title);
  
  // 1. Chiudi tutti gli altri
  this.specialsList.forEach(item => {
    if (this.isGroup(item) && item !== group) {
      item.isOpen = false;
    }
  });

  // 2. Inverti solo questo
  group.isOpen = !group.isOpen;
  
  console.log('Stato dopo click:', this.specialsList.map(i => this.isGroup(i) ? i.isOpen : 'video'));
}
}