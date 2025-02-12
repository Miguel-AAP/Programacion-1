import tienda from "./Cl_tienda.js";
import articulo from "./Cl_articulo.js";

let salida = document.getElementById("salida"),
    tien = new tienda(),
    art1 = new articulo(888,10,15),
    art2 = new articulo(777,20,25),
    art3 = new articulo(999,15,25),
    art4 = new articulo(666,25,35),
    art5 = new articulo(111,50,70),
    art6 = new articulo(333,40,50),
    art7 = new articulo(444,80,100),
    art8 = new articulo(222,5,10)

tien.procesarArticulo(art1)
tien.procesarArticulo(art2)
tien.procesarArticulo(art3)
tien.procesarArticulo(art4)
tien.procesarArticulo(art5)
tien.procesarArticulo(art6)
tien.procesarArticulo(art7)
tien.procesarArticulo(art8)

salida.innerHTML =`Ganancia total: ${tien.acumDiferencia}<br>
                    Código del articulo con mayor precio de venta: ${tien.codigoMayorPrecioVenta}`
