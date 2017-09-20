// Boleano
var finJuego = false;
// Númericos
var pi = 3.1416;
var color = 0xffcc00;
var edad = 40;
// Textos
var usuarioNombre = "Javier Pérez";
usuarioNombre = "María Calderón";
// Arreglos
var alumnos = ["Alumno1", "Alumno2", "Alumno3"];
var profesores = ["Profesor1", "Profesor2", "Profesor3"];
// Tuplas
var curso;
curso = ["Angular", 10];
var cursos;
var universidades;
// Enumeraciones
var listaErrores;
(function (listaErrores) {
    listaErrores[listaErrores["error404"] = 404] = "error404";
    listaErrores[listaErrores["error500"] = 500] = "error500";
    listaErrores[listaErrores["error409"] = 409] = "error409";
})(listaErrores || (listaErrores = {}));
// Any
var cualquierCosa = "cadena";
cualquierCosa = 100;
cualquierCosa = { nombre: "Andrea" };
// Void
function advertencia() {
    console.log("advertencia");
}
var nohaceNada = undefined;
// Never
function manejadorErrores() {
    throw new Error();
}
var saludoDia = "Hola, buen día";
console.log(saludo.length);
var numeroPI = 3.1416;
console.log(numeroPI.length);
//# sourceMappingURL=03-tipos-variables.js.map