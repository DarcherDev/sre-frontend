import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/pages/layout/layout.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'estudiantes/list', 
    pathMatch: 'full' 
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('../layout/layout.module').then((m) => m.LayOutModule),
  },
  { 
    path: '**', 
    redirectTo: 'estudiantes' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
