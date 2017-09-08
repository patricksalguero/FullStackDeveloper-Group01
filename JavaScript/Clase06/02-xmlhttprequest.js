const tbody = document.querySelector("tbody")
const txtNombre = document.querySelector("#txtNombre")
const txtApellido = document.querySelector("#txtApellido")
const txtEdad = document.querySelector("#txtEdad")

const botonGrabar = document.querySelector(".btnGrabar")
const botonCancelar = document.querySelector(".btnCancelar")

const urlAPIRest = "http://javascript.tibajodemanda.com"
const urlListar = `${urlAPIRest}/listar`
const urlEliminar = `${urlAPIRest}/eliminar`
const urlInsertar = `${urlAPIRest}/insertar`
const urlActualizar = `${urlAPIRest}/actualizar`

let registroSeleccionado

const botones = registro => {
	return `
		<a href="#" class="btn btn-info btnEditar" data-registro='${JSON.stringify(registro)}'><i class="fa fa-pencil" aria-hidden="true"></i></a>
		<a href="#" class="btn btn-danger btnEliminar" data-id="${registro.id}"><i class="fa fa-times" aria-hidden="true"></i></a>	
	`
}

const ajax = (metodo, url, cb, formData)=>{
	const obj = new XMLHttpRequest()

	obj.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			cb(this.responseText)
		}
	}

	obj.open(metodo, url, true)

	if(formData) {
		obj.send(formData)
	} else {
		obj.send()
	}



}

const ftnGrabar = () =>{
	const nombre = txtNombre.value,
		  apellido = txtApellido.value,
		  edad = txtEdad.value

	const formData = new FormData()
	formData.append("nombre", nombre)
	formData.append("apellido", apellido)
	formData.append("edad", edad)

	const cb = () => {
		alert("Registro insertado / actualizado")
		txtNombre.value = ""
		txtApellido.value = ""
		txtEdad.value = ""
		registroSeleccionado = undefined
		ftnListar()
	}

	if(registroSeleccionado) {
		ajax("post",`${urlActualizar}/${registroSeleccionado.id}` , cb, formData)
	} else {
		ajax("post", urlInsertar, cb, formData)
	}
}

const ftnEliminar = id =>{
	const cb = () => {
		alert("Registro eliminado")
		ftnListar()
	}

	ajax("post", `${urlEliminar}/${id}`, cb)
}

const ftnListar = () => {
	const cb = (respuesta) => {
		const registros = JSON.parse(respuesta)
				const filas = registros
								.map(registro => `
									<tr>
										<td>${registro.id}</td>
										<td>${registro.nombre}</td>
										<td>${registro.apellido}</td>
										<td>${registro.edad}</td>
										<td>
											${botones(registro)}
										</td>
									</tr>
								`)
								.join("")
				tbody.innerHTML = filas
		
				const botonesEditar = document.querySelectorAll(".btnEditar")
				const botonesEliminar = document.querySelectorAll(".btnEliminar")
		
				botonesEliminar.forEach(boton => {
					boton.addEventListener("click", function(e) {
						e.preventDefault()
		
						if(confirm("¿Está seguro de querer eliminar?")){
							// const id = e.target.parent.getAttribute("data-id")
							const id = this.getAttribute("data-id")
							ftnEliminar(id)
						}
					})
				})
	
				botonesEditar.forEach(boton => {
					boton.addEventListener("click", function(e){
						e.preventDefault()
	
						registroSeleccionado = JSON.parse(this.dataset.registro)
	
						txtNombre.value = registroSeleccionado.nombre
						txtApellido.value = registroSeleccionado.apellido
						txtEdad.value = registroSeleccionado.edad
					})
				})	
	}
	ajax("get", urlListar, cb)
}

botonGrabar.addEventListener("click", e => {
	e.preventDefault()

	ftnGrabar()
})

botonCancelar.addEventListener("click", e => {
	e.preventDefault()

	registroSeleccionado = undefined
	txtNombre.value = ""
	txtApellido.value = ""
	txtEdad.value = ""
})

ftnListar()