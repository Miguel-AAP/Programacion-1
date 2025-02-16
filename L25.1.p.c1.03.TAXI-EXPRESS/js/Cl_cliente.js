export default class cliente{

constructor(nombre,tipo,edad,sexo){
    this.nombre = nombre
    this.tipo = tipo
    this.edad = +edad
    this.sexo = sexo


}

get nombre(){
    return this._nombre
}

set nombre(n){
    this._nombre =n
}

get tipo(){
    return this._tipo   

}

set tipo(t){
    this._tipo= t
}

get edad(){
    return this._edad
}
    
set edad(e){
    this._edad=e
}

get sexo(){
    return this._sexo
}

set sexo(s){
    this._sexo=s
}









}