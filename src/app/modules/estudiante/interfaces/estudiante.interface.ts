import { Persona } from "@shared/interfaces";

export type Grado = 'primero' | 'segundo' | 'tercero' | 'cuarto' | 'quinto' | 
                    'sexto' | 'septimo' | 'octavo' | 'noveno' | 'decimo' | 'undecimo';

export interface Estudiante {
  id: number;
  numeroMatricula: string;
  grado: Grado;
  persona: Persona;
}