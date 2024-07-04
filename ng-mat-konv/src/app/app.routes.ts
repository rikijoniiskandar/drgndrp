import { Routes } from '@angular/router';
import { PageLayout } from '@shared/enums/PageLayout';
import { PageLayoutResolver } from '@shared/layout/services/page-layout-resolver.service';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'canvas'
    },
    {
        path: 'canvas',
        loadChildren: () => import('./features/canvas/canvas-routing.module').then(m => m.CanvasRoutingModule),
        resolve: {
            layout: PageLayoutResolver(PageLayout.Canvas)
        }
    },
    {
        path: 'display',
        loadChildren: () => import('./features/display/display-routing.module').then(m => m.DisplayRoutingModule)
    }
];
