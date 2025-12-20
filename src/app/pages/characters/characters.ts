import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinViewerComponent } from '../../components/skin-viewer/skin-viewer';
import { NgxParticlesModule } from "@tsparticles/angular";
import { MoveDirection, OutMode, Container, ISourceOptions } from "@tsparticles/engine";

interface Character {
  name: string;
  role: string;
  skinUrl: string;
  description?: string;
}

interface PyramidLevel {
  levelName: string;
  characters: Character[];
}

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, SkinViewerComponent, NgxParticlesModule],
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class CharactersComponent {
  // Particles Config
  particlesOptions: ISourceOptions = {
    fpsLimit: 120,
    particles: {
      color: {
        value: "#d4af37", // Gold
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

  characterLevels: PyramidLevel[] = [
    {
      levelName: 'Imperatore',
      characters: [

        { name: 'Inkubak', role: 'Kaiser', skinUrl: 'https://minotar.net/skin/Inkubak', description: 'Sovrano assoluto dell\'Impero di Enbarr.' }
      ]
    },
    {
      levelName: 'Presidente del Consiglio',
      characters: [
        { name: 'Furo610_', role: 'Primo Ministro', skinUrl: 'https://minotar.net/skin/Furo610_' },
      ]
    },
    {
      levelName: 'Consiglio di Amministrazione di Enbarr',
      characters: [
        { name: 'Guaro', role: 'Ministro del Guaro', skinUrl: 'https://minotar.net/skin/Guaro' },
        { name: 'Ronfo', role: 'Ministro delle Pozioni', skinUrl: 'https://minotar.net/skin/Ronfo' },
        { name: 'Uberhero', role: 'Ministro della Sicurezza', skinUrl: 'https://minotar.net/skin/Uberhero' },
        { name: 'ZekPower01', role: 'Sindaco di New Enbarr', skinUrl: 'https://minotar.net/skin/ZekPower01' },
        { name: 'SalFox_', role: 'Ministro IT', skinUrl: 'https://minotar.net/skin/SalFox_' },
        { name: 'EroLiSonoQui', role: 'Sindaco di Moszna', skinUrl: 'https://minotar.net/skin/EroLiSonoQui' },
        { name: 'Dqrwinn', role: 'Generale dell\'Esercito', skinUrl: 'https://minotar.net/skin/Dqrwinn' },
        { name: 'Shadow_Leoh', role: 'Ministro delle Finanze', skinUrl: 'https://minotar.net/skin/Shadow_Leoh' },
      ]
    },
    {
      levelName: 'Cittadini Onorari',
      characters: [
        { name: 'Guaro', role: 'Il Guaro', skinUrl: 'https://minotar.net/skin/Guaro' },
        { name: 'Arves100', role: 'Cittadino', skinUrl: 'https://minotar.net/skin/Arves100' },
        { name: 'Erisastra', role: 'Cittadino', skinUrl: 'https://minotar.net/skin/Erisastra' },
        { name: 'Kalianna03', role: 'Cittadino', skinUrl: 'https://minotar.net/skin/Kalianna03' },
        { name: 'ClipperNero', role: 'Cittadino', skinUrl: 'https://minotar.net/skin/ClipperNero' },
      ]
    }
  ];
}