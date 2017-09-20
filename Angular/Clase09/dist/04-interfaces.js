var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var imprimirListaUsuarios = function (obj) {
    console.log(obj.nombre);
    console.log(obj.id);
    console.log(obj.estado);
};
imprimirListaUsuarios({ nombre: "Sergio", id: 100, estado: true });
var calcularFactura = function (obj) {
    console.log(obj.igv);
};
var cargarDatosUsuario = function (obj) {
    var nombre = obj.nombre;
    // obj.nombre = "Nuevo nombre"  //Esto da error
};
var listaFunciones = function (nom, apellido) {
    return nom + " " + apellido;
};
var Reloj = /** @class */ (function () {
    function Reloj() {
        this.zonaHoraria = "America\Lima";
    }
    Reloj.prototype.configurarHora = function (d) {
        return "Hora";
    };
    return Reloj;
}());
var Animal = /** @class */ (function () {
    function Animal(raza) {
        this.raza = raza;
    }
    Animal.prototype.obtenerDatos = function () {
        return this.raza;
    };
    return Animal;
}());
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero(tipo, raza) {
        var _this = _super.call(this, raza) || this;
        _this.tipo = tipo;
        return _this;
    }
    Mamifero.prototype.obtenerDatos = function () {
        return this.tipo + " de raza " + _super.prototype.obtenerDatos.call(this);
    };
    return Mamifero;
}(Animal));
var mamifero = new Mamifero("ballena", "cetaceo");
console.log(mamifero.tipo);
console.log(mamifero.obtenerDatos());
//# sourceMappingURL=04-interfaces.js.map