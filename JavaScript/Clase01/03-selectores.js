const divContenido = document.getElementById('contenidos')

console.log(divContenido)

const articlesRojos = document.getElementsByClassName("rojo")

console.log(articlesRojos)

const divsTodos = document.getElementsByTagName("div")
console.log(divsTodos)

const listaDivs = document.querySelectorAll('div')
console.log(listaDivs)

const articlesColorRojo = document.querySelectorAll('article.rojo')
console.log(articlesColorRojo)

const divCont = document.querySelectorAll('div#contenidos')
console.log(divCont)

const divContUnico = document.querySelector('div#contenidos')
console.log(divContUnico)

const primerLI = document.querySelector("[data-rel='1']")
console.log(primerLI)

const todosLI = document.querySelector('[data-rel]')
console.log(todosLI)