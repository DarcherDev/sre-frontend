import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../pages/layout/layout.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'estudiantes',
        loadChildren: () => import('../../modules/estudiante/estudiante.module').then(m => m.EstudianteModule),
      },
      {
        path: 'profesores',
        loadChildren: () => import('../../modules/profesor/profesor.module').then(m => m.ProfesorModule),
      },
      { path: '**', 
        redirectTo: 'estudiantes' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
