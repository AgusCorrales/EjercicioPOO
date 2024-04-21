class Persona{
    constructor (nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    detalles(){
        console.log(`El nombre es ${this.nombre} , tiene ${this.edad} años y su genero es ${this.genero}`);
    }
}

let persona = new Persona ("Agustin", 26, "masculino");
persona.detalles()



class Estudiantes extends Persona{
    constructor (nombre, edad, genero, curso, grupo){
        super (nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(`Nombre del alumno: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, curso: ${this.curso}, grupo: ${this.grupo}`);
    }
}

let estudiante = new Estudiantes ("Agustin", 26, "Masculino", "Full Stack", "Full Time");
estudiante.registrar()


class Profesor extends Persona{
    constructor(nombre,edad,genero,asignatura,nivel){
        super(nombre,edad,genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`Nombre del profesor: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, asignatura: ${this.asignatura}, nivel: ${this.nivel}`);
    }
}

let profesor = new Profesor ("Pepito", 50, "Masculino", "Matemáticas", "Primario");
profesor.asignar()