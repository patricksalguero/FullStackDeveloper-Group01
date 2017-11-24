export module miPropioModulo {
	export class Reloj {
		obtenerHoras(){
			const fecha = new Date()
			return fecha.getHours()
		}
	}
}

export const obtenerMinutos = () => {
	const fecha = new Date()
	return fecha.getMinutes()
}

export class Matriculas {
	agregarCurso() {
		return 'Curso agregado'
	}
}

class Fixture {
	listarEquipos() {
		return 'Lista de equipos'
	}
}
const fixture = new Fixture()
export { fixture }

const fechaActual = new Date()
export default fechaActual