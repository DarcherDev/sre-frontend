import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { EstudianteFormModalComponent  } from './pages/estudiante-form-modal/estudiante-form-modal.component';
import { EstudianteListComponent } from './pages/estudiante-list/estudiante-list.component';
import { EstudianteRoutingModule } from './router/estudiante-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    EstudianteFormModalComponent ,
    EstudianteListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,

    EstudianteRoutingModule,
  ]
})
export class EstudianteModule { }
