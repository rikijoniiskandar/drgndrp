import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageLayout } from '@shared/enums/PageLayout';
import { CanvasLayoutComponent } from '@shared/layout/canvas-layout/canvas-layout.component';
import { PageLayoutService } from '@shared/layout/services/page-layout.service';

@Component({
  selector: 'app-dnd-studio',
  standalone: true,
  imports: [CommonModule ,CanvasLayoutComponent],
  templateUrl: './dnd-studio.component.html',
  styleUrl: './dnd-studio.component.scss'
})
export class DndStudioComponent {
  readonly PageLayout = PageLayout

  constructor(
    public pageLayoutService: PageLayoutService
  ){}
}
