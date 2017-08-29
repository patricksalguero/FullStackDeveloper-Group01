// Asigna referencias de las manecillas a variables
const segundero = document.querySelector("div.segundero")
const minutero = document.querySelector("div.minutero")
const horario = document.querySelector("div.horario")

// Obtiene la fecha y la hora actual
const fechaHora = new Date()
const horas = fechaHora.getHours() // Obtiene las horas de la variable anterior
const minutos = fechaHora.getMinutes() // Obtiene los minutos de la variable anterior
const segundos = fechaHora.getSeconds() // Obtiene los segundos de la variable anterior

// Asigna a variables los grados que se mueven cada una de las manecillas por segundo
const dAngSegundero = 6
const dAngMinutero = .1
const dAngHorario = 0.00833333333

// Calcula el ángulo de giro inicial de cada manecilla
let anguloSegundero = -90 + segundos*dAngSegundero
let anguloMinutero = -90 + (minutos*60 + segundos)*dAngMinutero 
let anguloHorario = -90 + (horas*60*60 + minutos*60 + segundos)*dAngHorario

// Mueve las manecillas del reloj
const moverManecillas = () => {
	segundero.style.transform = `rotate(${anguloSegundero}deg)`
	minutero.style.transform = `rotate(${anguloMinutero}deg)`
	horario.style.transform = `rotate(${anguloHorario}deg)` 
}

// Cada segundo modifica el ángulo de cada manecilla cada segundo
setInterval(()=>{
	anguloSegundero += dAngSegundero
	anguloMinutero += dAngMinutero
	anguloHorario += dAngHorario
	moverManecillas()
}, 1000)

// Move las manecillas
moverManecillas()

// Agrega transiciones iniciales a las manecillas
segundero.classList.add("transicionManecillas")
minutero.classList.add("transicionManecillas")
horario.classList.add("transicionManecillas")

