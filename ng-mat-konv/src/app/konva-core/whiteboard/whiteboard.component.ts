import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, HostListener, Input, ViewChild } from '@angular/core';
import Konva from 'konva';
import { ContainerConfig } from 'konva/lib/Container';
import { CircleConfig } from 'konva/lib/shapes/Circle';
import { CoreShapeComponent, StageComponent, NgKonvaEventObject } from 'ng2-konva';
import { AsyncSubject, BehaviorSubject, Subject, debounceTime } from 'rxjs';

interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'app-whiteboard',
  standalone: true,
  imports: [StageComponent, CoreShapeComponent, AsyncPipe, NgFor, NgIf],
  templateUrl: './whiteboard.component.html',
  styleUrl: './whiteboard.component.scss',
})
export class WhiteboardComponent implements AfterViewInit {
  @ViewChild('stage') stage!: StageComponent;
  @ViewChild('layer') layer!: CoreShapeComponent;

  @Input() shapes: any[] = [];

  public StageConfig$ = new BehaviorSubject<ContainerConfig>({
    width: window.innerWidth,
    height: window.innerHeight,
    draggable: true,
  });

  private resizeSubject = new Subject<Event>();
  public BoardWidth: number = window.innerWidth;
  public BoardHeight: number = window.innerHeight;

  public configCircle: CircleConfig = {
    x: 100,
    y: 100,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
  };

  constructor() {
  }

  ngAfterViewInit(): void {
    this.resizeSubject.pipe(
      debounceTime(300) 
    ).subscribe(() => {
      this.updateStageConfig();
    });

    this.updateStageConfig();
  }

  /***************** BEGIN METHOD *****************/
  /**
   * Func infinity scroll
   */
  InfinityScroll(pos: Position) {
    return {
      x: pos.x,
      y: pos.y,
    };
  }

  private updateStageConfig(): void {
    const config: ContainerConfig = {
      width: this.BoardWidth,
      height: this.BoardHeight,
      draggable: true,
    };
    this.StageConfig$.next(config);
  }

  @HostListener('window:resize', ['$event'])
  OnResize(event: Event): void {
    this.resizeSubject.next(event);
    const target = event.target as Window;
    this.BoardWidth = target.innerWidth;
    this.BoardHeight = target.innerHeight;
  }

  /**
   * @function GetShapeConfig
   * @param shape 
   * @returns 
   */
   GetShapeConfig(shape: string) {
    const baseConfig = { draggable: true, x: 100, y: 100 };

    switch (shape) {
      case 'rect':
        return { ...baseConfig, width: 100, height: 100, fill: 'red' };
      case 'circle':
        return this.configCircle;
      case 'ellipse':
        return { ...baseConfig, radiusX: 50, radiusY: 30, fill: 'green' };
      default:
        return {};
    }

  }

  renderShapes(): void {
    if (!this.stage || !this.layer) {
      return;
    }

    // Clear the existing shapes
    // this.layer.getStage().destroyChildren();

    // Render new shapes based on updated input

    // Batch draw to render the stage
    this.stage.getStage().batchDraw();
  }

  handleLayerClick(event: NgKonvaEventObject<MouseEvent>) {
    console.log('Layer clicked:', event);
    // Handle your logic when the layer is clicked
  }

  handleLayerDoubleClick(event: NgKonvaEventObject<MouseEvent>) {
    console.log('Layer double-clicked:', event);
    // Handle your logic when the layer is double-clicked
  }
  
  addRect(){
    const layer = new Konva.Layer()
  }

  /***************** END METHOD *****************/
}
