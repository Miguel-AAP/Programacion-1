export default class empresa{
constructor(){
    this.contClientes= +0
    this.contClientesFMayores=+0
    this.menorEdad=+100
    this.acumEdad=+0
}

procesarCliente(cliente){
    this.contClientes++
    this.acumEdad+=cliente.edad
    if(cliente.sexo =="F" && cliente.edad >=18){
        this.contClientesFMayores++
    }
    if(cliente.edad<this.menorEdad){
        this.menorEdad=cliente.edad
    }
}

calcularPromedioEdad(){
    return this.acumEdad/this.contClientes
}

}