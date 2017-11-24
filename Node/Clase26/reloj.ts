import { EventEmitter } from 'events' 

export class Reloj extends EventEmitter {
	obtenerHora() {
		return new Date()
	}

	iniciar(){
		setInterval(()=> {
			this.emit("mostrar la hora", this.obtenerHora())
		}, 1000)
	}
	
}
