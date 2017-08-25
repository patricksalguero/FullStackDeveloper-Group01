const arregloTeclas = document.querySelectorAll("a.tecla")
arregloTeclas.forEach( elemento => {
	elemento.addEventListener("transitionend", function(e){
		e.target.classList.remove("presionada") // Esto también funciona
		// this.classList.remove("presionada")
	})

	/*elemento.addEventListener("transitionend", e => {
		e.target.classList.remove("presionada")
		// this.classList.remove("presionada")  Esto da error
	})*/
})

window.addEventListener("keydown", evt => {
	// console.log(evt)
	const teclaPresionada = evt.keyCode

	const tecla = document.querySelector(`a[data-tecla="${teclaPresionada}"]`)
	
	if(tecla){
		arregloTeclas.forEach(item => {
			item.classList.remove("presionada")
		})
		tecla.classList.add("presionada")
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