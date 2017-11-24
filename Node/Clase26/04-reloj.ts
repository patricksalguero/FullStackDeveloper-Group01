import { Reloj } from './reloj'

const reloj = new Reloj()
reloj.iniciar()
reloj.on("mostrar la hora", hora => {
	console.log(hora)
})