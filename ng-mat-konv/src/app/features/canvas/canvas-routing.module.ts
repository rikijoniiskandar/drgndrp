import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayout } from '@shared/enums/PageLayout';
import { PageLayoutResolver } from '@shared/layout/services/page-layout-resolver.service';
import { from, map, tap } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dnd'
  },
  {
    path: 'dnd',
    loadChildren: () =>
      from(import('./dnd/dnd.module')).pipe(
        map((m) => m.DndModule),
        tap({
          next: () => {
            console.log('dnd module load');
          },
          error: () => {
            console.log('dnd module load failed');
          },
        })
      ),
      resolve: {
        layout: PageLayoutResolver(PageLayout.Canvas)
      }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanvasRoutingModule {}
