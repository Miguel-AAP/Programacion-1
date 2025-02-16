import cliente from "./Cl_cliente.js";
import empresa from "./Cl_empresa.js";


let empr = new empresa(),
    salida = document.getElementById("salida"),
    continuar = 1



while(continuar){
    let n = prompt("Introducir nombre"),
        t = prompt("Introducir tipo de servicio"),
        e = +prompt("Introducir edad"),
        s = prompt("Introducir sexo"),
        cli = new cliente(n,t,e,s)

    empr.procesarCliente(cli)

    continuar = prompt("1.continuar")
}

salida.innerHTML= `Cantidad de clientes femeninos mayores de edad:${empr.contClientesFMayores}<br>
                    La menor edad atendida fue: ${empr.menorEdad} años <br>
                    El promedio de edad atendida de los clientes es de ${empr.calcularPromedioEdad()} años`