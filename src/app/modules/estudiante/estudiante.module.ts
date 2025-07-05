import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { EstudianteFormComponent } from './pages/estudiante-form/estudiante-form.component';
import { EstudianteListComponent } from './pages/estudiante-list/estudiante-list.component';
import { EstudianteRoutingModule } from './router/estudiante-routing.module';



@NgModule({
  declarations: [
    EstudianteFormComponent,
    EstudianteListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,

    EstudianteRoutingModule,
  ]
})
export class EstudianteModule { }
