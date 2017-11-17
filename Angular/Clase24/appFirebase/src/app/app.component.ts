import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { NgForm } from '@angular/forms'

interface Jugador {
	id?: string,
	nombre: string,
	pais: string
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	listaJugadores: Observable<Jugador[]>
	coleccionJugadores: AngularFirestoreCollection<Jugador>

	nombre: string
	pais: string

	constructor(private afs: AngularFirestore) {
		this.coleccionJugadores = this.afs.collection<Jugador>("jugadores")

		this.listaJugadores = this.coleccionJugadores.snapshotChanges().map(datos => {
			return datos.map(dato => {
				const data: Jugador = dato.payload.doc.data() as Jugador
				const id = dato.payload.doc.id

				return { id, ...data }
			})
		})

	}

	agregarJugador() {
		const registro: Jugador = { nombre: this.nombre, pais: this.pais }
		this.coleccionJugadores.add(registro)
			.then(data => console.log("data grabada"))
			.catch(error => console.log(error))
	}

	actualice(jugador: Jugador) {
		if (jugador.pais === "Perú") {
			jugador.pais = "Argentina"
		} else {
			jugador.pais = "Perú"
		}

		this.coleccionJugadores.doc(jugador.id).update(jugador)
			.then(data => console.log("data grabada"))
			.catch(error => console.log(error))
	}

	eliminar(id) {
		this.coleccionJugadores.doc(id).delete()
		.then(data => console.log("data eliminada"))
		.catch(error => console.log(error))
	}


}
