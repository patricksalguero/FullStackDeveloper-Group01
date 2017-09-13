function ajax(url){
	fetch(url)
		.then(respuesta => respuesta.json())
		.then(registros => {
			console.table(registros)
			apiRestGenerador.next()
		})
}

function* llamadas(){
	ajax("https://jsonplaceholder.typicode.com/posts")
	yield "1"
	ajax("https://jsonplaceholder.typicode.com/comments")
	yield "2"
	ajax("https://jsonplaceholder.typicode.com/photos")
}

const apiRestGenerador = llamadas()
apiRestGenerador.next()