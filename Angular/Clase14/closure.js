function Contabilidad(){
    cantidadTrabajadores = 10

    this.agregar = function(){
        this.cantidadTrabajadores++
    }

    this.disminuir = function(){
        this.cantidadTrabajadores--
    }

    return this
}

var obj = Contabilidad()
obj.agregar()
console.log(obj.cantidadTrabajadores)
obj.disminuir()
obj.disminuir()

console.log(obj.cantidadTrabajadores)