export default class estudiante{

    constructor(nm,sx,dd){
        this.nombre= nm
        this.sexo= sx
        this.edad = dd
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nm){
        this._nombre=nm
    }

    get sexo(){
        return this._sexo
    }

    set sexo(sx){
        this._sexo =sx
    }

    get edad(){
        return this._edad
    }

    set edad(dd){
        this._edad =dd
    }

}