import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { MenuRoutingModule } from './router/menu-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuRoutingModule, 
  ]
})
export class LayOutModule { }