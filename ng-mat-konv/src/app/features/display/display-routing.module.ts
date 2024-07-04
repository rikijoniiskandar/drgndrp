import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from, map, tap } from 'rxjs';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () =>
      from(import('./demo/demo.module')).pipe(
        map((m) => m.DemoModule),
        tap({
          next: () => {
            console.log('display demo module load');
          },
          error: () => {
            console.log('display demo load failed');
          },
        })
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
