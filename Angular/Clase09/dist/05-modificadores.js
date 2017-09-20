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
var AnimalTerrestre = /** @class */ (function () {
    function AnimalTerrestre(raza) {
        this.raza = raza;
        this.periodo = "jurásico";
    }
    AnimalTerrestre.prototype.obtenerDatos = function () {
        return this.raza;
    };
    return AnimalTerrestre;
}());
var MamiferoTerrestre = /** @class */ (function (_super) {
    __extends(MamiferoTerrestre, _super);
    function MamiferoTerrestre(tipo, raza) {
        var _this = _super.call(this, raza) || this;
        _this.tipo = tipo;
        return _this;
    }
    MamiferoTerrestre.prototype.obtenerDatos = function () {
        console.log(this.periodo);
        return "" + this.tipo;
        // return `${this.tipo} de raza ${this.raza}` // Da error
    };
    return MamiferoTerrestre;
}(AnimalTerrestre));
var obj = new MamiferoTerrestre("ballena", "cetaceo");
// console.log(obj.tipo) // Da error
//console.log(obj.periodo)  // Da error
var CursosArea51 = /** @class */ (function () {
    function CursosArea51() {
    }
    CursosArea51.listarUsuarios = function () {
        console.log("lista de usuarios");
    };
    CursosArea51.codigoMinisterio = 100;
    return CursosArea51;
}());
console.log(CursosArea51.codigoMinisterio);
console.log(CursosArea51.listarUsuarios());
//# sourceMappingURL=05-modificadores.js.map