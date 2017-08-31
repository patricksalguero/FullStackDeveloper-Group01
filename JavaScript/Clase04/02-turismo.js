// Selecciona todos los divs que tienen una imagen de fondo
const divLugares = document.querySelectorAll("div.lugar")

divLugares.forEach(lugar => {
	// Configura el evento "click" de cada div
	lugar.addEventListener("click", function(){

		// Remueve los estilos "seleccionado" y "desplegar" de cada div
		divLugares.forEach(lugar => {
			lugar.classList.remove("seleccionado")
			lugar.classList.remove("desplegar")
		})

		// Añade la clase "seleccionado" al div sobre el cual hicimos clic.
		// La clase "seleccionado" modifica la propiedad "flex" y hace que el div crezca en ancho
		this.classList.add("seleccionado")
	})

	// Se ejecuta cuando la transición (cambio de ancho) del div termine
 	lugar.addEventListener("transitionend", function(){
		console.log(this.classList)
		this.classList.add("desplegar")
	})
})