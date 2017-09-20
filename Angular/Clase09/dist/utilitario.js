"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pasarAMayusculas(texto) {
    return texto.toUpperCase();
}
exports.pasarAMayusculas = pasarAMayusculas;
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.devolverNombre = function () {
        return this.nombre;
    };
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=utilitario.js.map