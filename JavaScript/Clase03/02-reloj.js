const segundero = document.querySelector("div.segundero")
const minutero = document.querySelector("div.minutero")
const horario = document.querySelector("div.horario")

const fechaHora = new Date()
const horas = fechaHora.getHours()
const minutos = fechaHora.getMinutes()
const segundos = fechaHora.getSeconds()

const dAngSegundero = 6
const dAngMinutero = .1
const dAngHorario = 0.00833333333

let anguloSegundero = -90 + segundos*dAngSegundero
let anguloMinutero = -90 + (minutos*60 + segundos)*dAngMinutero 
let anguloHorario = -90 + (horas*60*60 + minutos*60 + segundos)*dAngHorario

const moverManecillas = () => {
	segundero.style.transform = `rotate(${anguloSegundero}deg)`
	minutero.style.transform = `rotate(${anguloMinutero}deg)`
	horario.style.transform = `rotate(${anguloHorario}deg)` 
}

setInterval(()=>{
	anguloSegundero += dAngSegundero
	anguloMinutero += dAngMinutero
	anguloHorario += dAngHorario
	moverManecillas()
}, 1000)

moverManecillas()

segundero.classList.add("transicionManecillas")
minutero.classList.add("transicionManecillas")
horario.classList.add("transicionManecillas")

