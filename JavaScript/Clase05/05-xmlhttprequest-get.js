const tbody = document.querySelector("tbody")
const divUsuario = document.querySelector("div")
const obj = new XMLHttpRequest()

obj.onreadystatechange = function() {
	if(this.readyState === 4 && this.status === 200) {
		const objRegistros = JSON.parse(this.responseText)
		const registros = objRegistros.map(item => {
			return `
				<tr>
					<td>${item.id}</td>
					<td>${item.nombre}</td>
				</tr>
			`
		}).join("")

		tbody.innerHTML = registros
	}
}

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