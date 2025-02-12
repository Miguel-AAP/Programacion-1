export default class seccion{
    constructor(){
        this.contEstudiantes =+0
        this.contAprobados =+0
        this.acumNota =+0
    }

    procesarEstudiante(estudiante){
        this.contEstudiantes++
        if(estudiante.nota>= 48){
            this.contAprobados++
        }
        this.acumNota += estudiante.nota
    }

    calcularPromedio(){
        return this.acumNota/this.contEstudiantes
    }

}