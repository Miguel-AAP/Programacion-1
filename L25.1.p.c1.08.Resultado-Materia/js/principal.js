import seccion from "./Cl_seccion.js";
import estudiante from "./Cl_estudiante.js";

let salida = document.getElementById("salida"),
    sec = new seccion(),
    est1 = new estudiante(888,60),
    est2 = new estudiante(777,50),
    est3 = new estudiante(999,40),
    est4 = new estudiante(333,80),
    est5 = new estudiante(111,30),
    est6 = new estudiante(666,90),
    est7 = new estudiante(444,48),
    est8 = new estudiante(222,60)

sec.procesarEstudiante(est1)
sec.procesarEstudiante(est2)
sec.procesarEstudiante(est3)
sec.procesarEstudiante(est4)
sec.procesarEstudiante(est5)
sec.procesarEstudiante(est6)
sec.procesarEstudiante(est7)
sec.procesarEstudiante(est8)

salida.innerHTML = `Cantidad de aprobados: ${sec.contAprobados} <br>
                    Cantida de reprobados: ${sec.contEstudiantes-sec.contAprobados}<br>
                    Promedio de la sección: ${sec.calcularPromedio()}`