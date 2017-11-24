////////////////////////////
import { longitud, saludos } from './contador'
const personas = ['Sergio', 'Jana', 'Greshell']

console.log(longitud(personas))
console.log(saludos(personas))

/////////////////////////////
import fechaActual, { miPropioModulo, Matriculas, obtenerMinutos, fixture } from './miModulo'

console.log(fechaActual)

const reloj = new miPropioModulo.Reloj()
console.log(reloj.obtenerHoras())

const matriculas = new Matriculas()
console.log(matriculas.agregarCurso())

console.log(obtenerMinutos())

console.log(fixture.listarEquipos())

import * as elementos from './miModulo';
const nuevoReloj = new elementos.miPropioModulo.Reloj()

import items = require('./miModulo')
const otroReloj = new items.miPropioModulo.Reloj()

////////////////////////////////////

import './miPropioPrototipo'
console.log(personas["mensaje"]())





