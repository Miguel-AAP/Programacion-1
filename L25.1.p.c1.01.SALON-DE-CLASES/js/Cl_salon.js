export default class salon{

    constructor(){
        this.estudianteMayorEdad=0
        this.estudianteMayorNombre=0
        this.contEstudiantes=0
        this.contChicas=0
        this.contChicasMayor=0
        this.acumEdadEstudiantes=0

    }

    calcularEdadPromedio(){
        return this.acumEdadEstudiantes/this.contEstudiantes
    }

    calcularPorcientoChicasMayor(){
        return 100*this.contChicasMayor/this.contChicas
    }

    procesarEstudiante(estudiante){
        this.contEstudiantes++
        this.acumEdadEstudiantes += estudiante.edad
        if(estudiante.edad>this.estudianteMayorEdad){
            this.estudianteMayorEdad = estudiante.edad
            this.estudianteMayorNombre= estudiante.nombre
        }
        if(estudiante.sexo=="F"){
            this.contChicas++
            if(estudiante.edad>=18){
                this.contChicasMayor++
            }
        }



    }



}