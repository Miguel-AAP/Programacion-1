export default class estudiante{
    constructor(cedula,nota){
        this.cedula = cedula
        this.nota = +nota

    }

    get nota(){
        return this._nota
    }

    set nota(n){
        this._nota = n
    }

}