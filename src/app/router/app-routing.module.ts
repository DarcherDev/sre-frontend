import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'estudiantes',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('../layout/layout.module').then(m => m.LayOutModule),
  },
  { 
    path: '**', 
    redirectTo: 'estudiantes' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    useHash: false 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }