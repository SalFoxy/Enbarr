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
    }
  `]
})
export class SkinViewerComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() skinUrl!: string;
  @Input() zoom: number = 0.85;
  @Input() offsetY: number = 0;

  @ViewChild('skinContainer') skinContainer!: ElementRef<HTMLCanvasElement>;

  private viewer: skinview3d.SkinViewer | null = null;
  private animation: skinview3d.WalkingAnimation | null = null;
  private resizeObserver: ResizeObserver | null = null;

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.skinContainer) return;

      const canvas = this.skinContainer.nativeElement;
      const container = canvas.parentElement;

      // Ensure we get dimensions, falling back to canvas if container is null
      // Note: skinview3d needs explicit dimensions or it might default to 300x300
      const rect = container ? container.getBoundingClientRect() : canvas.getBoundingClientRect();
      const initialWidth = rect.width;
      const initialHeight = rect.height;

      this.viewer = new skinview3d.SkinViewer({
        canvas: canvas,
        width: initialWidth,
        height: initialHeight,
        skin: this.skinUrl,
        zoom: this.zoom,
      });

      this.viewer.camera.position.x = 0;
      this.viewer.camera.position.y = this.offsetY;
      this.viewer.camera.position.z = 60;
      this.viewer.playerObject.rotation.y = 0.5;

      this.animation = new skinview3d.WalkingAnimation();
      this.viewer.animation = this.animation;
      this.animation.speed = 0.5;

      this.resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          if (this.viewer) {
            if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
              this.viewer.setSize(entry.contentRect.width, entry.contentRect.height);
            }
          }
        }
      });

      if (container) {
        this.resizeObserver.observe(container);
      }

    }, 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.viewer) {
      if (changes['skinUrl'] && !changes['skinUrl'].firstChange) {
        this.viewer.loadSkin(this.skinUrl);
      }
      if (changes['zoom'] && !changes['zoom'].firstChange) {
        this.viewer.zoom = this.zoom;
      }
      if (changes['offsetY'] && !changes['offsetY'].firstChange) {
        this.viewer.camera.position.y = this.offsetY;
      }
    }
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.viewer) {
      this.viewer.dispose();
      this.viewer = null;
    }
  }
}