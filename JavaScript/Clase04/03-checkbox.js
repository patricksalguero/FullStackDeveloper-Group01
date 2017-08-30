const inputs = document.querySelectorAll("input")

let ultimoSeleccionado

inputs.forEach(item => {
	item.addEventListener("click", function(ev){

		let marcar = false

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

		if(this.checked) ultimoSeleccionado = this
	})
})