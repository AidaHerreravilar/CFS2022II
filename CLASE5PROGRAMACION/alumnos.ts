class Alumno {
    private nombre: string;
    private nota: number;

    constructor(name: string, note: number) {
        this.nombre = name;
        this.nota = note;
    }
    aprobar() {
        if (this.nota >= 7) {
            console.log("aprobado");
        }else{
             console.log("desaprobado");}
        }
        }
    
