import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteListComponent } from '../pages/estudiante-list/estudiante-list.component';
import { EstudianteFormModalComponent  } from '../pages/estudiante-form-modal/estudiante-form-modal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: EstudianteListComponent },
      { path: 'add', component: EstudianteFormModalComponent  },
      { path: 'edit/:id', component: EstudianteFormModalComponent  },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }