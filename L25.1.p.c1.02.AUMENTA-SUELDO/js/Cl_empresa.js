export default class empresa{

    constructor(){
        this.contPersonal=+0
        this.contPersonalObrero=+0
        this.montoTotalPagar=+0

    }

    procesarEmpleado(empleado){
        this.contPersonal++
        if(empleado.tipo==1){
            empleado.aumento = empleado.sueldo*0.20
            this.contPersonalObrero++
        }
        else if(empleado.tipo ==2){
            empleado.aumento = empleado.sueldo*0.10
        }
        empleado.sueldo += empleado.aumento
        this.montoTotalPagar += empleado.aumento
    }

    porcentajeObreros(){
        return 100*this.contPersonalObrero/this.contPersonal
    }


}