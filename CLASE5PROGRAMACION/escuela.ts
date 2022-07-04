import {Alumno} from "./alumno";
import {Profesor} from "./profesor";

class Escuela {
  nombre: string;
  alumno1 = new Alumno("aida", 8);
  alumno2 = new Alumno("carina", 7);
  alumnos: Alumno[] = [this.alumno1, this.alumno2];
  profesores: Profesor[] =[new Profesor("Juli", new Profesor ("geor", new Profesor("sofi")))] ; 
  constructor(name: string) {
    this.nombre = name;

  }
  agregarAlumno(){

  }
}