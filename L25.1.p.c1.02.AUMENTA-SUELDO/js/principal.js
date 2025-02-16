import empleado from "./Cl_empleado.js";
import empresa from "./Cl_empresa.js";


let emp = new empresa(),
    salida = document.getElementById("salida"),
    continuar = 1



while(continuar==1){

    let c =prompt("Introducir cédula"),
        s =prompt("Introducir sueldo"),
        t =prompt("Introducir tipo de trabajador"),
        empl = new empleado(c,s,t)

    emp.procesarEmpleado(empl)
    salida.innerHTML += `la cédula ${c} tiene nuevo sueldo de $${empl.sueldo}<br>`
    continuar=prompt("1.continuar")

}

salida.innerHTML += `Total a pagar solo por aumento de sueldo:${emp.montoTotalPagar} <br>
                    Porcentaje personal obrero:${emp.porcentajeObreros()}`
