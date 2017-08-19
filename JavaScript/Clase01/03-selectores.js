/*
	En html existen 3 objetos principales: window, navigator y document.

	"document" es que quien "conoce" todas las etiquetas y elementos que contiene la página web.

	"document" tiene varios métodos para seleccionar etiquetas.
*/


// getElementById: selecciona una etiqueta usando el valor del atributo "id"
// Si existe dos o más etiquetas con el mismo valor de "id" (cosa que no debe suceder). "getElementById" selecciona la primera etiqueta que encuentra

const divContenido = document.getElementById('contenidos')
console.log(divContenido)

// getElementsByClassName: selecciona una o más etiqueta usando el valor del atributo "class"
// Devuelve una lista de tipo HTMLCollection
const articlesRojos = document.getElementsByClassName("rojo")
console.log(articlesRojos)

// getElementsByTagName: selecciona una o más etiqueta usando su nombre.
// Devuelve una lista de tipo HTMLCollection
const divsTodos = document.getElementsByTagName("div")
console.log(divsTodos)

// querySelectorAll: selecciona una o más etiqueta usando el valor del atributo "class"
// Devuelve una lista de tipo NodeList

// Selecciona todas las etiquetas "div"
const listaDivs = document.querySelectorAll('div')
console.log(listaDivs)


// Selecciona todas las etiquetas "article" que tengan la clase "rojo"
const articlesColorRojo = document.querySelectorAll('article.rojo')
console.log(articlesColorRojo)

// Selecciona todas las etiquetas "div" que tengan el id "contenidos"
const divCont = document.querySelectorAll('div#contenidos')
console.log(divCont)

// querySelector: selecciona solo un elemento

// Selecciona una etiqueta "div" que tenga el id "contenidos"
const divContUnico = document.querySelector('div#contenidos')
console.log(divContUnico)

// Selecciona una etiqueta que tenga el atributo "data-rel" igual a '1'
const primerLI = document.querySelector("[data-rel='1']")
console.log(primerLI)

// Selecciona la primera etiqueta que tenga un atributo "data-rel" sin importar el valor que tenga asignado
const todosLI = document.querySelector('[data-rel]')
console.log(todosLI)