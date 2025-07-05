import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from '../../interfaces/estudiante.interface';

@Component({
  selector: 'app-estudiante-form-modal',
  templateUrl: './estudiante-form-modal.component.html',
  styleUrls: ['./estudiante-form-modal.component.css']
})
export class EstudianteFormModalComponent {
  form: FormGroup = this.fb.group({});
  isEditMode: boolean;

  grados = [
  'primero', 'segundo', 'tercero', 'cuarto', 'quinto',
  'sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'undecimo'
];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EstudianteFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { estudiante?: Estudiante, isEdit: boolean }
  ) {
    this.isEditMode = data.isEdit;
    this.initializeForm();
  }

initializeForm(): void {
  // Primero crea el grupo principal
  this.form = this.fb.group({
    numeroMatricula: [this.data.estudiante?.numeroMatricula || '', Validators.required],
    grado: [this.data.estudiante?.grado || '', Validators.required],
    persona: this.fb.group({
      firstName: [this.data.estudiante?.persona.firstName || '', Validators.required],
      lastNames: [this.data.estudiante?.persona.lastNames || '', Validators.required],
      birthDate: [this.data.estudiante?.persona.birthDate || '', Validators.required],
      email: [
        this.data.estudiante?.persona.email || '', 
        [Validators.required, Validators.email]
      ],
      phone: [this.data.estudiante?.persona.phone || '', Validators.required]
    })
  });
}

  onSubmit(): void {
    if (this.form.valid) {
      const estudianteData: Estudiante = {
        ...this.form.value,
        id: this.isEditMode ? this.data.estudiante?.id : undefined
      };
      this.dialogRef.close(estudianteData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}