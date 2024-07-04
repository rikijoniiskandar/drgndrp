import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { WhiteboardComponent } from 'src/app/konva-core/whiteboard/whiteboard.component';
import { KonvaSidebarComponent } from '../../components/konva-sidebar/konva-sidebar.component';



@Component({
  selector: 'app-canvas-layout',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, MatToolbarModule, MatIconModule, WhiteboardComponent, KonvaSidebarComponent],
  templateUrl: './canvas-layout.component.html',
  styleUrl: './canvas-layout.component.scss'
})
export class CanvasLayoutComponent {
  shapes: any[] = [];
  
  onAddShape(shape: string) {
    this.shapes.push({ type: shape });
  }
}
