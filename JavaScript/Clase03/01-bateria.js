// Variable de tipo función
const arregloTeclas = document.querySelectorAll("a.tecla")
arregloTeclas.forEach( elemento => {
	elemento.addEventListener("transitionend", function(e){
		e.target.classList.remove("presionada") // Esto también funciona
		// this.classList.remove("presionada") // Esta es una alternativa
	})

	/*elemento.addEventListener("transitionend", e => {
		e.target.classList.remove("presionada")
		// this.classList.remove("presionada")  Esto da error
	})*/
})


window.addEventListener("keydown", evt => { // El evento "keydown" sucede cuando se hunde una tecla
	// console.log(evt)
	const teclaPresionada = evt.keyCode  // Devuelve el código ASCII de la tecla presionada

	const tecla = document.querySelector(`a[data-tecla="${teclaPresionada}"]`)
	
	if(tecla){
		arregloTeclas.forEach(item => {
			item.classList.remove("presionada")   // El método "remove" quita una clase de un elemento
		})
		tecla.classList.add("presionada")  // El método "add" agrega una clase a un elemento

		// Selección de un elemento usando un atributo
		const audioAEjecutar = document.querySelector(`audio[data-tecla="${teclaPresionada}"]`)

		audioAEjecutar.currentTime = 0  // Hay que poner el puntero del sonido al comienza para reiniciar el sonido. De otra forma habrá que esperar que el sonido termine de ejecutarse para ejecutarlo otra vez

		audioAEjecutar.play() // Reproduce un audio
	}
	/*
		a 65
		s 83
		d 68
		f 70
		j 74
		k 75
		l 76
		ñ 186
		esp 32
	*/
})