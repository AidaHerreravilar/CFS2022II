import {Alumno} from "./alumno";
export class Profesor{
    nombreProfesor: string;
    alumno1= new Alumno("aida", 8);
    alumno2= new Alumno("carina", 7);
    alumnos:Alumno=[this.alumno1,this.alumno2];
    constructor(nameP: string){
        this.nombreProfesor = nameP;
    }
}