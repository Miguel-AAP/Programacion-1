export default class articulo{
    constructor(codigo,costo,precio){
        this.codigo=codigo
        this.costo= +costo
        this.precio= +precio
    }

    get costo(){
        return this._costo
    }

    set costo(c){
        this._costo =c
    }

    get precio(){
        return this._precio
    }

    set precio(p){
        this._precio =p
    }
    
    get codigo(){
        return this._codigo
    }
    set codigo(c){
        this._codigo=c
    }
}