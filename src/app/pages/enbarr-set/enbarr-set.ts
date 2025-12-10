import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// Aggiungi 'Sparkles' e 'Film' alle importazioni
import { LucideAngularModule, Play, Clock, MonitorPlay, Sparkles, Film } from 'lucide-angular';

interface NewsVideo {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
}

@Component({
  selector: 'app-enbarr-set',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './enbarr-set.html',
  styleUrl: './enbarr-set.css'
})
export class EnbarrSetComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);

  readonly PlayIcon = Play;
  readonly ClockIcon = Clock;
  readonly MonitorIcon = MonitorPlay;
  // Nuove icone
  readonly SpecialIcon = Sparkles;
  readonly TrailerIcon = Film;

  currentVideo!: NewsVideo;
  currentSafeUrl!: SafeResourceUrl;

  // Lista Notizie (TG)
  newsList: NewsVideo[] = [
    {
      id: '9mCz0qrU3cg', 
      title: 'TGEnbarr - Edizione Speciale',
      description: 'Cosa succederà a Ronfo?',
      date: '26 Agosto 2022'
    },
    {
      id: 'MHCiXpcuxFM', 
      title: 'TGEnbarr - TROLLGAME',
      description: 'Game Over.',
      date: '31 Gennaio 2024'
    },
    {
      id: 'fO6EOo61fQI', 
      title: 'TGEnbarr - ENDGAME',
      description: 'Game Over.',
      date: '15 Agosto 2022'
    },
    {
      id: 'A0vRiKVjym8', 
      title: 'TGEnbarr - Edizione Aulin: Un incubo da paura',
      description: '⚰️🎃 In questo episodio di TGEnbarr il nostro Furo610_ sarà alle prese con un incubo orribile. Riuscirà ad uscirne vivo?🕸️🎃 ',
      date: '31 Ottobre 2021'
    },
    {
      id: 'vYawHFeadm0',
      title: 'TGEnbarr 3 -Interviste & Inseguimenti',
      description: 'In questa terza edizione del TGEnbarr il nostro presentatore Furo610_ sarà alle imprese con i ladri e intervisterà gli Admin del Towny! (E Ronfo)',
      date: '02 Ottobre 2021'
    },
    {
      id: 'BD6QE5O6w-4',
      title: 'TG Enbarr -Guerre e Conquiste',
      description: 'In questa edizione straordinaria di TG Enbarr si parlerà di guerra, conquista e... Rumori molesti. Si ringrazia EroLiSonoQui per la recitazione nello spezzone dell\'hackeraggio a Nylox!',
      date: '30 Luglio 2021'
    },
    {
      id: '4djVqM7_o_I',
      title: 'TGEnbarr -Prima edizione: Scontri a Mozambique',
      description: 'Una produzione originale di Enbarrset, un servizio di ClipperNero a mozambique per raccontare gli scontri fra giocatori.',
      date: '05 Giugno 2021'
    }
  ];

  // --- NUOVA LISTA: Edizioni Speciali & Trailer ---
  specialsList: NewsVideo[] = [
    {
      id: 'jt3L2mNq7ss', 
      title: 'ENBARR MEMORIES - Trailer Ufficiale',
      description: 'Salvate l\'Impero Adrestiano, guerrieri. La nuova avventura fatta da Ronfo e Furo610. Giocata a sessioni, quest\'estate.',
      date: 'Enbarr Games'
    },
    {
      id: 'FbQG3OSwvTA', 
      title: 'ENBARR DIRECT Giugno 2025',
      description: 'Tutti gli annunci più caldi di quest\'estate, solo sull\'Enbarr Direct.(Fa caldissimo cristo)',
      date: 'Enbarr Games'
    },
    {
      id: 'lNDtsF4vY2E', 
      title: 'ENBARR PARTY 2025 - Trailer Ufficiale',
      description: 'Cucinando in progresso...',
      date: 'Enbarr Games'
    },
    {
      id: '0a6cx2exTQY', 
      title: 'Inkubak Madness 1.21 - Questionable Trials - Trailer Ufficiale',
      description: 'Questo mese, forse.\n(Dipende tutto da Arves)',
      date: 'Inkubak Madness'
    },
    {
      id: '5agefqcd2bA', 
      title: 'TG Enbarr - E̴̽ͅd̸̻͖̓i̷͍͒z̶̝͠ỉ̵̝o̵͗͒͜n̸͍͎̊͝ḛ̵̂͝ ̵͚̍S̴̥̹̋̚p̴̜͐̀ę̵̓͊c̸̦͕̀i̵̱̟͒a̸̲̿̊l̴̬̼̔ẽ̸̖͍',
      description: 'Nella comodità di casa sua, Furo(gay) viene ricordato dalla televisione di un impegno particolarmente importante il cui esito, però, non è certo.',
      date: 'Speciale'
    },
    {
      id: 'ss1a5ell0u4', 
      title: 'Inkubak Madness 1.20 "Steno and the Suspicious Sands" - Official Trailer',
      description: 'First look into the new game from Enbarr Studios.',
      date: 'Inkubak Madness'
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
}