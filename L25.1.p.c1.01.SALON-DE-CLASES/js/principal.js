import salon from "./Cl_salon.js";
import estudiante from "./Cl_estudiante.js";


let sal= new salon(),
    continuar = "1"

while(continuar =="1"){
    let n = prompt("introducir nombre (dato irrelevante)"),
        s = prompt("Introducir sexo"),
        d = +prompt("introducir edad"),
        estud= new estudiante(n,s,d)
    sal.procesarEstudiante(estud)

    continuar = prompt("1.continuar")
}

alert("edad promedio:"+sal.calcularEdadPromedio()
    +" estudiante con mayor edad:"+sal.estudianteMayorNombre
    +" porcentaje de chicas mayor de edad:" 
    +sal.calcularPorcientoChicasMayor())