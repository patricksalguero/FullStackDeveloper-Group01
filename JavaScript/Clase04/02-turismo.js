const divLugares = document.querySelectorAll("div.lugar")

divLugares.forEach(lugar => {
	lugar.addEventListener("click", function(){
		divLugares.forEach(lugar => {
			lugar.classList.remove("seleccionado")
			lugar.classList.remove("desplegar")
		})
		this.classList.add("seleccionado")
	})

	lugar.addEventListener("transitionend", function(){
		console.log(this.classList)
		this.classList.add("desplegar")
	})
})