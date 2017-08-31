// Selecciona todos los campos input
const inputs = document.querySelectorAll("input")

// Se crea un variable para almacenar el input marcado
let ultimoSeleccionado

inputs.forEach(item => {
	// Asigna el evento "click" a cada input
	item.addEventListener("click", function(ev){

		let marcar = false

		// Solo si el usuario marca un check haciendo clic sobre un checkbox y además usando la tecla Shift y habiendo seleccionado previamente,
		// Se ejecuta lo siguiente:

		if(ev.shiftKey && this.checked && ultimoSeleccionado) {
			inputs.forEach(item => {
				if(item==ultimoSeleccionado || item == this){
					marcar = !marcar
				}

				if(marcar) {
					item.checked = true
				}
			})
		}
		// Si el usuario marco un check, este queda como el último seleccionado

		if(this.checked) ultimoSeleccionado = this
	})
})