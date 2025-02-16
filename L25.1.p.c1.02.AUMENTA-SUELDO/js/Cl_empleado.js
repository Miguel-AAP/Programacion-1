export default class empleado{
    constructor(cedula,sueldo,tipo){
        this.cedula =cedula
        this.sueldo = +sueldo
        this.tipo = tipo
        this.aumento = +0
    }

    get cedula(){
        return this._cedula
    }

    set cedula(c){
        this._cedula=c
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(s){
        this._sueldo=s
    }
    get aumento(){
        return this._aumento
    }
    
    set aumento(a){
        this._aumento = a
    }
    get tipo(){
        return this._tipo
    }

    set tipo(t){
        this._tipo =t
    }





}