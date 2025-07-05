import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteListComponent } from '../pages/estudiante-list/estudiante-list.component';
import { EstudianteFormComponent } from '../pages/estudiante-form/estudiante-form.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: EstudianteListComponent },
      { path: 'add', component:  EstudianteFormComponent},
      { path: 'edit/:id', component: EstudianteFormComponent},
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
