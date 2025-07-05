import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { EstudianteService } from '../../service/estudiante.service';
import { EstudianteFormModalComponent } from '../estudiante-form-modal/estudiante-form-modal.component';


@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent {
  estudiantes: Estudiante[] = [];
    isEditMode: boolean = false;
  
  displayedColumns: string[] = [
    'nombre', 
    'matricula', 
    'grado',
    'telefono',
    'acciones'
  ];

  constructor(
    private estudianteService: EstudianteService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEstudiantes();
  }

  loadEstudiantes(): void {
    this.estudianteService.getEstudiantes()
      .subscribe({
        next: (estudiantes) => this.estudiantes = estudiantes,
        error: () => this.showSnackbar('Error al cargar estudiantes')
      });
  }
  openEstudianteForm(estudiante?: Estudiante): void {
  const dialogRef = this.dialog.open(EstudianteFormModalComponent, {
    width: '600px',
    data: {
      estudiante: estudiante,
      isEdit: !!estudiante
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const operation = this.isEditMode ? 
        this.estudianteService.updateEstudiante(result) :
        this.estudianteService.addEstudiante(result);

      operation.subscribe({
        next: () => {
          this.showSnackbar(`Estudiante ${this.isEditMode ? 'actualizado' : 'creado'} correctamente`);
          this.loadEstudiantes();
        },
        error: () => this.showSnackbar(`Error al ${this.isEditMode ? 'actualizar' : 'crear'} estudiante`)
      });
    }
  });
}

// Modificar los botones para usar el modal
addEstudiante(): void {
  this.openEstudianteForm();
}

editEstudiante(estudiante: Estudiante): void {
  this.openEstudianteForm(estudiante);
}

deleteEstudiante(estudiante: Estudiante): void {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '350px',
    data: {
      title: 'Confirmar eliminación',
      message: `¿Estás seguro de eliminar al estudiante ${estudiante.persona.firstName} ${estudiante.persona.lastNames}?`,
      details: `Matrícula: ${estudiante.numeroMatricula}`
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.estudianteService.deleteEstudiante(estudiante.id).subscribe({
        next: () => {
          this.showSnackbar('Estudiante eliminado correctamente');
          this.loadEstudiantes();
        },
        error: () => this.showSnackbar('Error al eliminar estudiante')
      });
    }
  });
}

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { 
      duration: 3000,
      panelClass: ['snackbar-success'] 
    });
  }
}