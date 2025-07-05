import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public sidebarItems = [
    { label: 'estudiantes', icon: 'patient_list', url: '/estudiantes' },
    { label: 'profesores',  icon: 'patient_list', url: '/profesores' },
  ];
}
