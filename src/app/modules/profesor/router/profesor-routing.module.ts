import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorListComponent } from '../pages/profesor-list/profesor-list.component';
import { ProfesorFormComponent } from '../pages/profesor-form/profesor-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProfesorListComponent },
      { path: 'add', component: ProfesorFormComponent },
      { path: 'edit/:id', component: ProfesorFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }