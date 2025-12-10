import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinViewerComponent } from '../../components/skin-viewer/skin-viewer';

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
  imports: [CommonModule, SkinViewerComponent],
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class CharactersComponent {
  characterLevels: PyramidLevel[] = [
    {
      levelName: 'Comandante Supremo',
      characters: [

        { name: 'Inkubak', role: 'Kaiser', skinUrl: 'https://minotar.net/skin/Inkubak' } 
      ]
    },
    {
      levelName: 'L\'Alto Consiglio',
      characters: [
        { name: 'Furo610_', role: 'Generale', skinUrl: 'https://minotar.net/skin/Furo610_' },
        { name: 'Ronfo', role: 'Arcimaga', skinUrl: 'https://minotar.net/skin/Ronfo' }
      ]
    },
    {
      levelName: 'I Capitani della Guardia',
      characters: [
        { name: 'Garrick', role: 'Fanteria', skinUrl: 'https://minotar.net/skin/SalFox_' }, 
        { name: 'Thalia', role: 'Esploratori', skinUrl: 'https://minotar.net/skin/SalFox_' }, 
        { name: 'Bjorn', role: 'Artiglieria', skinUrl: 'https://minotar.net/skin/SalFox_' } 
      ]
    },
    {
      levelName: 'I Capitani della Guardia2',
      characters: [
        { name: 'Garrick', role: 'Fanteria', skinUrl: 'https://minotar.net/skin/SalFox_' }, 
        { name: 'Thalia', role: 'Esploratori', skinUrl: 'https://minotar.net/skin/SalFox_' }, 
        { name: 'Bjorn', role: 'Artiglieria', skinUrl: 'https://minotar.net/skin/SalFox_' }, 
        { name: 'Garrick', role: 'Fanteria', skinUrl: 'https://minotar.net/skin/SalFox_' }, 
        { name: 'Thalia', role: 'Esploratori', skinUrl: 'https://minotar.net/skin/SalFox_' }, 
        { name: 'Bjorn', role: 'Artiglieria', skinUrl: 'https://minotar.net/skin/SalFox_' } 
      ]
    }
  ];
}