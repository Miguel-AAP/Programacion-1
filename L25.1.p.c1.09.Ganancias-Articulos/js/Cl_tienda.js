export default class tienda{
    constructor(){
        this.acumDiferencia=+0
        this.codigoMayorPrecioVenta=""
        this.MayorPrecioVenta=+0
    }

    procesarArticulo(articulo){
        this.acumDiferencia+= articulo.precio-articulo.costo
        if(this.MayorPrecioVenta<articulo.precio){
            this.MayorPrecioVenta=articulo.precio
            this.codigoMayorPrecioVenta=articulo.codigo
        }
    }


}