import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorListComponent } from './pages/profesor-list/profesor-list.component';
import { ProfesorFormComponent } from './pages/profesor-form/profesor-form.component';
import { ProfesorRoutingModule } from './router/profesor-routing.module';



@NgModule({
  declarations: [
    ProfesorListComponent,
    ProfesorFormComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
