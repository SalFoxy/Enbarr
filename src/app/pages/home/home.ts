import { Component, OnInit, OnDestroy, signal, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CardComponent } from '../../components/card/card';
import { NgxParticlesModule } from '@tsparticles/angular';
import { MoveDirection, OutMode } from '@tsparticles/engine';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, NgxParticlesModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  heroImages = [
    '/img/enbarr-home.png',
    '/img/enbarr-home2.png',
    '/img/enbarr-3.png'
  ];
  private intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startCarousel();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentSlide.update(prev => (prev + 1) % this.heroImages.length);
    }, 5000);
  }
  loreCards = [
    { title: 'La Fondazione', description: 'Nata dal fuoco dei vulcani antichi, Enbarr sorge imponente sulle ceneri.' },
    { title: 'Il Patto Aureo', description: 'Un accordo millenario che lega i mercanti alla corona, garantendo ricchezza.' },
    { title: 'I Bassifondi', description: 'Dove la luce dell\'oro non arriva, le gilde delle ombre controllano ogni respiro.' },
    { title: 'La Guardia', description: 'Guerrieri scelti vestiti di cremisi che proteggono i confini della città.' }
  ];

  particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: { enable: true },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#d4af37",
      },
      links: {
        color: "#d4af37",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: OutMode.bounce,
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
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
}