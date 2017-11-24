import { EventEmitter } from 'events'

const eventos = new EventEmitter()

eventos.on("nuevo alumno", nombre => {
	console.log(`Alumno nuevo: ${nombre}`)
})

eventos.on("nuevo alumno", nombre => {
	console.log(`Nombre en mayúsculas: ${nombre.toUpperCase()}`)
})

eventos.once("nuevo alumno", nombre => {
	console.log(`Nombre en minúsculas: ${nombre.toLowerCase()}`)
})

eventos.emit("nuevo alumno", "Sergio")
eventos.emit("nuevo alumno", "Andrea")