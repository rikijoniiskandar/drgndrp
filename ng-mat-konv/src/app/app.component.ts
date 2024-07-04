import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayout } from '@shared/enums/PageLayout';
import { AuthorizedLayoutComponent } from '@shared/layout/authorized-layout/authorized-layout.component';
import { CanvasLayoutComponent } from '@shared/layout/canvas-layout/canvas-layout.component';
import { ErrorLayoutComponent } from '@shared/layout/error-layout/error-layout.component';
import { PageLayoutService } from '@shared/layout/services/page-layout.service';
import { UnauthorizedLayoutComponent } from '@shared/layout/unauthorized-layout/unauthorized-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasLayoutComponent, AuthorizedLayoutComponent, UnauthorizedLayoutComponent, ErrorLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-mat-konv';

  readonly PageLayout = PageLayout

  constructor(
    public pageLayoutService: PageLayoutService
  ){}
}
