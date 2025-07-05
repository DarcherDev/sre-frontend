import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environmenst } from 'src/app/environments/environments';
import { Estudiante } from '../interfaces/estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl: string = environmenst.baseUrl+'/estudiante';

  constructor(private http: HttpClient) { }

  getEstudiantes():Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.baseUrl}/all`);
  }

  getEstudianteById(id:string):Observable <Estudiante|undefined>{
    return this.http.get<Estudiante>(`${this.baseUrl}/?EstudianteId=${id}`)
        .pipe(
            catchError( error => of(undefined) )
        );
  }

  addEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${this.baseUrl}/create`, estudiante);
  }

  updateEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    if (!estudiante.id) throw Error('Estudiante id is required')
    return this.http.put<Estudiante>(`${this.baseUrl}/update/${estudiante.id}`, estudiante);
  }

  deleteEstudiante(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }
}