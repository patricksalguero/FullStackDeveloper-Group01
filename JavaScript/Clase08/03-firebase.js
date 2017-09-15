(function(f, d){
		  // Initialize Firebase
		  var config = {
			apiKey: "AIzaSyCkRDn5jz8F9zea9a36fSHO8pKiK09LCUI",
			authDomain: "almacen-f6f2c.firebaseapp.com",
			databaseURL: "https://almacen-f6f2c.firebaseio.com",
			projectId: "almacen-f6f2c",
			storageBucket: "almacen-f6f2c.appspot.com",
			messagingSenderId: "981001116057"
		  };
		  f.initializeApp(config);

		  const inputCorreo = d.querySelector("#correo")
		  const inputContrasena = d.querySelector("#contrasena")
		  const inputNombreProducto = d.querySelector("#nombreProducto")
		  const botonLogin = d.querySelector("#boton-login")
		  const botonRegistro = d.querySelector("#boton-registro")
		  const botonCerrar = d.querySelector("#boton-cerrar")
		  const botonIngresarModificar = d.querySelector("#boton-ingresar-modificar")

		  const formRegistroLogin = d.querySelector("#formRegistroLogin")
		  const formInventario = d.querySelector("#formInventario")

		  const tbody = d.querySelector("tbody")

		  let idSeleccionado

		  const refProductos = f.database().ref("/productos")

		  botonRegistro.addEventListener("click", function(e){
			  e.preventDefault()

			  const correo = inputCorreo.value
			  const contrasena = inputContrasena.value

			  f.auth()
				  .createUserWithEmailAndPassword(correo, contrasena)
				  .then(() => {
					  console.log("Registro completo")
					  inputCorreo.value = ""
					  inputContrasena.value = ""
				  })
				  .catch(error => {
					  console.log(error)
				  })
		  })
		  
		  botonLogin.addEventListener("click", function(e){
			e.preventDefault()

			const correo = inputCorreo.value
			const contrasena = inputContrasena.value

			f.auth()
				.signInWithEmailAndPassword(correo, contrasena)
				.then(() => {
					console.log("Login completo")
					inputCorreo.value = ""
					inputContrasena.value = ""
				})
				.catch(error => {
					console.log(error)
				})
		  })	

		  botonCerrar.addEventListener("click", function(e){
			  e.preventDefault()

			  f.auth()
			  	.signOut()
		  })

		  botonIngresarModificar.addEventListener("click", function(e){
			  e.preventDefault()

			  const nombreProducto = inputNombreProducto.value

			  if(idSeleccionado){
				refProductos
					.child(idSeleccionado)
					.update({nombreProducto})
					.then(()=>{
						idSeleccionado = undefined
						inputNombreProducto.value = ""
					})
			  } else {
				refProductos
				.push()
				.set({nombreProducto})
				.then((registro)=>{
					const ref = f.database().ref("/productos/-Ku2LAoDSLIAsDjiDNL6")
					ref.push().set({compra:100})
					ref.push().set({compra:110})
					ref.push().set({compra:120})
					inputNombreProducto.value = ""
				})
			  }
		  })
		  
		  f.auth()
		  	.onAuthStateChanged(usuario => {
				if(usuario){
					formRegistroLogin.style.display = "none"
					formInventario.style.display = "block"
				} else {
					formRegistroLogin.style.display = "block"
					formInventario.style.display = "none"					
				}
			})
		
			refProductos.on("value", productos => {
				const listaProductos = productos.val()

				let filas = ""

				for(let id in listaProductos){
					filas += `
						<tr>
							<td>${listaProductos[id].nombreProducto}</td>
							<td>
								<a href="#" class="btn btn-sm btn-success boton-modificar" data-nombre="${listaProductos[id].nombreProducto}" data-id="${id}">Modificar</a>
								<a href="#" class="btn btn-sm btn-danger boton-eliminar" data-id="${id}">Eliminar</a>
							</td>
						</tr>
					`
				}

				tbody.innerHTML = filas

				const botonesModificar = d.querySelectorAll(".boton-modificar")
				const botonesEliminar = d.querySelectorAll(".boton-eliminar")

				botonesEliminar.forEach(boton => {
					boton.addEventListener("click", function(e){
						const id = this.dataset.id

						if(confirm("¿Está seguro?")) {
							refProductos
								.child(id)
								.remove()
						}
					})
				})

				botonesModificar.forEach(boton => {
					boton.addEventListener("click", function(e){
						e.preventDefault()

						const id = this.dataset.id
						const nombre = this.getAttribute("data-nombre")

						idSeleccionado = id
						inputNombreProducto.value = nombre
					})
				})
			})
})(firebase, document)