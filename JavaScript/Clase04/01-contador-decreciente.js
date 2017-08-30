const divDias = document.querySelector("div.dias")
const divHoras = document.querySelector("div.horas")
const divMinutos = document.querySelector("div.minutos")
const divSegundos = document.querySelector("div.segundos")

const fecha = new Date()
let anno = fecha.getFullYear()
let mes = fecha.getMonth() + 1
let dia = fecha.getDate()+1

mes = mes >=10 ? mes : `0${mes}`
dia = dia >=10 ? dia : `0${dia}`



document.getElementsByTagName("input")[0].value = `${anno}-${mes}-${dia}`


const mostrarTiempoFaltante = () => {
	const fechaObjetivo = document.getElementsByTagName("input")[0].value
	const fechaActual = new Date()
	const tiempoTranscurrido = fechaActual.getTime()
	
	const fechaNavidad = new Date(`${fechaObjetivo} 00:00:00`)
	const tiempoParaNavidad = fechaNavidad.getTime()
	
	const tiempoFaltante = tiempoParaNavidad - tiempoTranscurrido
	
	const diasFaltantes = Math.floor(tiempoFaltante / (24*60*60*1000))
	
	const horasFaltantes = Math.floor((tiempoFaltante - diasFaltantes*24*60*60*1000) / (60*60*1000))
	
	const minutosFaltantes = Math.floor((tiempoFaltante - diasFaltantes*24*60*60*1000 - horasFaltantes*60*60*1000) / (60*1000))
	
	const segundosFaltantes = Math.floor((tiempoFaltante - diasFaltantes*24*60*60*1000 - horasFaltantes*60*60*1000 - minutosFaltantes*60*1000) / 1000)

	divDias.innerHTML = diasFaltantes >= 10 ? diasFaltantes : `0${diasFaltantes}` 
	divHoras.innerHTML = horasFaltantes >= 10 ? horasFaltantes : `0${horasFaltantes}`
	divMinutos.innerHTML = minutosFaltantes >= 10 ? minutosFaltantes : `0${minutosFaltantes}`
	divSegundos.innerHTML = segundosFaltantes >= 10 ? segundosFaltantes : `0${segundosFaltantes}`
}

setInterval(()=>{
	mostrarTiempoFaltante()
}, 1000)

mostrarTiempoFaltante()
