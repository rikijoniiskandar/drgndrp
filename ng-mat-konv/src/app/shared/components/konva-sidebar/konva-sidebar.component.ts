import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-konva-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './konva-sidebar.component.html',
  styleUrl: './konva-sidebar.component.scss'
})
export class KonvaSidebarComponent {
  @Output() addShape = new EventEmitter<string>();

  shapes = ['rect', 'circle', 'ellipse'];

  onAddShape(shape: string) {
    this.addShape.emit(shape);
    console.log(shape);
    
  }


}
