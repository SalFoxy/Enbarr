import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Rimosse Share2 e X, aggiunta Plus
import { LucideAngularModule, Send, Youtube, Gamepad2, Plus } from 'lucide-angular';

@Component({
  selector: 'app-social-widget',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './social-widget.html',
  styleUrls: ['./social-widget.css']
})
export class SocialWidgetComponent {
  isOpen = false;

  // UNICA Icona per il pulsante (un "+")
  readonly TriggerIcon = Plus;

  // Icone Social
  readonly TelegramIcon = Send;
  readonly YoutubeIcon = Youtube;
  readonly DiscordIcon = Gamepad2;

  // Configurazione Link (Uguale a prima)
    socialLinks = [
    { 
      label: 'Ultimenbarr.net', 
      url: 'https://t.me/ultimenbarr24', 
      img: 'https://cdn4.telesco.pe/file/cz1hhlGhy5qeAB32hotZD-W_fSzsghiG1ar04pYai2rE5fzdAwMfyr2CNz1V2U6xy__cmaJLy_DwQ0VKnvEmRxfVwkgR700I3Ka9s5jSDUtL4hyvgCC605CVJmMV9BTEie3SEB0nV4t5b2G4lUvSIBa0Ual3ohEEQ-hg2MT8xGq7X6Q3K7eZsfF0u6XHgnlXZbYeNZIaFBSXINQzsYghoVDlVSojObhA-H1eXt1ALjZ2jX2affZt_IfsNllwgg0vaAtsoIL9ao78ZP-uwSZ2JsqF1N6BzLXzD_-OU6qCYPesVfKpNEJW4YVdEdhKNV2c4ZDVdd3RU9lQkEIR3KYttA.jpg',
      color: '#0088cc' 
    },
    { 
      label: 'Enbarr Clips', 
      url: 'https://t.me/tuo_gruppo', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Telegram_logo_icon.svg/2048px-Telegram_logo_icon.svg.png',
      color: '#0088cc' 
    },
    { 
      label: 'EnbarrSet', 
      url: 'https://t.me/tuo_gruppo', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Telegram_logo_icon.svg/2048px-Telegram_logo_icon.svg.png', 
      color: '#0088cc' 
    },
    { 
      label: 'Furo610',    
      url: 'https://www.youtube.com/@Furo610', 
      img: 'https://yt3.googleusercontent.com/Jo0WjwXW95uEb7BkOHbIx0_HnVkXbK9Euaf6tFDbdSkn5dr1ukzCotbCBXwhh_7djiDgI1emYA=s120-c-k-c0x00ffffff-no-rj', 
      color: '#ff0000' 
    },
    { 
      label: 'DQRWINN',   
      url: 'https://www.youtube.com/@DQRWINN', 
      img: 'https://yt3.googleusercontent.com/ytc/AIdro_lWLG2OCisejAB3nSduSldNWTX2m3ZdE7DQAPIvngHrP-0=s120-c-k-c0x00ffffff-no-rj', 
      color: '#ff0000' 
    },
    { 
      label: 'Adrestia',  
      url: 'https://discord.gg/p8nWpjRdXb',   
      img: 'https://cdn.discordapp.com/icons/668087445958688778/582b61dbf8db2d57bbe3f6aff39b8f6e.webp',  
      color: '#5865F2' 
    },
];

  toggleWidget() {
    this.isOpen = !this.isOpen;
  }
}