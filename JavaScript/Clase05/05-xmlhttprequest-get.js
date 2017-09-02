const tbody = document.querySelector("tbody") // Referencia a la etiqueta "tbody"
const divUsuario = document.querySelector("div") // Referencia a la etiqueta "div"

// Creación de un objeto basado en la clase XMLHttpRequest
const obj = new XMLHttpRequest()

// El método "onreadystatechange" se ejecuta cada vez que el servidor cambia de estado la llamada
obj.onreadystatechange = function() {
	/*
		this.readyState retorna el estado del proceso generado al llamar al api rest. De estos estados solo nos interesa aquel que indica que el servidor ya respondió (this.readyState==4)

		this.readyState = 0   => No se llama aún al método "open". Es decir no está inicializado
		this.readyState = 1   => No se ha llamado aún al método "send". Es decir ya estamos listo para hacer la llamada formalmente pero aún no.
		this.readyState = 2   => La llamda ya fue cargada. Es decir, la consulta ya se hizo y el servidor la está procesando
		this.readyState = 3   => La respuesta del servidor todavía no llega por completo
		this.readyState = 4   => Ahora sí llegó la respuesta completa


		Pero que haya respondido, no significa que haya respondido bien.
		Para saber ello se utiliza "this.status" el cual retorna el estado de la llamada (500, 404, 200, 409, etc.).
		Solo nos interesa "this.status===200" porque significa que no hubo ningún problema con la respuesta de la llamada al api rest
	*/


	if(this.readyState === 4 && this.status === 200) {
		// Cuando la respuesta llega, hay que convertirla a JSON, para ello se usa el método "parse"
		const objRegistros = JSON.parse(this.responseText)

		// Usamos el método "map" para recorrer el arreglo de JSON devuelto por el servidor. Cada item (o sea cada JSON) lo convertimos a una fila de tabla y formamos un nuevo arreglo "registros".
		// Con el método "join" concatenamos cada elemento de "registros" con un espacio en blanco y transformamos "registros" de arreglo a cadena.
		const registros = objRegistros.map(item => {
			return `
				<tr>
					<td>${item.id}</td>
					<td>${item.nombre}</td>
				</tr>
			`
		}).join("")

		// La cadena la insertamos en la etiqueta tbody para que se vea en la página web.
		tbody.innerHTML = registros
	}
}

// Con el método "open" preparamos la llamada al api rest.
/*
	Este método tiene 3 parámetros:
	1. El método: get o post
	2. La url del api rest
	3. La sincronía:
			true: la llamada será asíncrona
			false: la llamada será síncrona
*/
obj.open("get", "http://javascript.tibajodemanda.com/listar", true)
obj.send()

const objUsuarios = new XMLHttpRequest()
objUsuarios.onreadystatechange = function(){
	if(this.status===200 && this.readyState===4) {
		const datos = JSON.parse(this.responseText)
		const nombre = `${datos.results[0].name.first} ${datos.results[0].name.last}`
		const foto = datos.results[0].picture.large
		
		const html = `
			<p>${nombre}</p>
			<img src="${foto}">
		`

		divUsuario.innerHTML = html
	}
}

objUsuarios.open("get", "https://randomuser.me/api/", true)
objUsuarios.send()