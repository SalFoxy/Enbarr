import { Component, ElementRef, Input, AfterViewInit, OnDestroy, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as skinview3d from 'skinview3d';

@Component({
  selector: 'app-skin-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #skinContainer class="skin-canvas"></canvas>`,
  styles: [`
    .skin-canvas {
      width: 100%;
      height: 100%;
      display: block;
      cursor: grab;
    }
    .skin-canvas:active {
      cursor: grabbing;
    }
  `]
})
export class SkinViewerComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() skinUrl!: string;
  @Input() width: number = 200;
  @Input() height: number = 300;

  @ViewChild('skinContainer') skinContainer!: ElementRef<HTMLCanvasElement>;

  private viewer: skinview3d.SkinViewer | null = null;
  private animation: skinview3d.WalkingAnimation | null = null;

  ngAfterViewInit() {
    this.viewer = new skinview3d.SkinViewer({
      canvas: this.skinContainer.nativeElement,
      width: this.width,
      height: this.height,
      skin: this.skinUrl,
      zoom: 0.85 
    });

    this.viewer.camera.position.x = -2;
    this.viewer.camera.position.y = 0; 
    this.viewer.camera.position.z = 60;

    this.viewer.playerObject.rotation.y = 0.5;

    this.animation = new skinview3d.WalkingAnimation();
  
    this.viewer.animation = this.animation;
    
    this.animation.speed = 0.5;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['skinUrl'] && this.viewer && !changes['skinUrl'].firstChange) {
      this.viewer.loadSkin(this.skinUrl);
    }
  }

  ngOnDestroy() {
    if (this.viewer) {
      this.viewer.dispose();
      this.viewer = null;
    }
  }
}