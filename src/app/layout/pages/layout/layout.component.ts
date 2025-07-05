import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public sidebarItems = [
    { label: 'estudiantes', icon: 'people', url: '/estudiantes' },
    { label: 'profesores',  icon: 'school', url: '/profesores' },
  ];
}
