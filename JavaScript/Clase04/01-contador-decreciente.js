// Selección de los elementos html sobre los cuales se mostrará el contador decreciente
const divDias = document.querySelector("div.dias")
const divHoras = document.querySelector("div.horas")
const divMinutos = document.querySelector("div.minutos")
const divSegundos = document.querySelector("div.segundos")

// Obtiene la fecha actual
const fecha = new Date()
let anno = fecha.getFullYear()
let mes = fecha.getMonth() + 1
let dia = fecha.getDate()+1

// Agrega cero al comienzo del número
mes = mes >=10 ? mes : `0${mes}`
dia = dia >=10 ? dia : `0${dia}`

// Setea el valor inicial del campo date
document.getElementsByTagName("input")[0].value = `${anno}-${mes}-${dia}`


const mostrarTiempoFaltante = () => {
	// Referencia al campo date
	const fechaObjetivo = document.getElementsByTagName("input")[0].value

	// Setea la fecha actual y el tiempo transcurrido desde 1970
	const fechaActual = new Date()
	const tiempoTranscurrido = fechaActual.getTime()
	
	// Setea el tiempo para el cual se desea la cuenta regresiva y se obtiene el tiempo transcurrido desde 1970
	const fechaNavidad = new Date(`${fechaObjetivo} 00:00:00`)
	const tiempoParaNavidad = fechaNavidad.getTime()
	
	// Determina el tiempo faltante en milisegundos entre la fecha actual y la fecha objetivo
	const tiempoFaltante = tiempoParaNavidad - tiempoTranscurrido
	
	// Determina los días, horas, minutos y segundos faltantes para llegar a la fecha objetivo
	const diasFaltantes = Math.floor(tiempoFaltante / (24*60*60*1000))
	const horasFaltantes = Math.floor((tiempoFaltante - diasFaltantes*24*60*60*1000) / (60*60*1000))
	const minutosFaltantes = Math.floor((tiempoFaltante - diasFaltantes*24*60*60*1000 - horasFaltantes*60*60*1000) / (60*1000))
	const segundosFaltantes = Math.floor((tiempoFaltante - diasFaltantes*24*60*60*1000 - horasFaltantes*60*60*1000 - minutosFaltantes*60*1000) / 1000)

	// Muestra el tiempo faltante en el html
	divDias.innerHTML = diasFaltantes >= 10 ? diasFaltantes : `0${diasFaltantes}` 
	divHoras.innerHTML = horasFaltantes >= 10 ? horasFaltantes : `0${horasFaltantes}`
	divMinutos.innerHTML = minutosFaltantes >= 10 ? minutosFaltantes : `0${minutosFaltantes}`
	divSegundos.innerHTML = segundosFaltantes >= 10 ? segundosFaltantes : `0${segundosFaltantes}`
}

// Cada segundo revisa el tiempo faltante
setInterval(()=>{
	mostrarTiempoFaltante()
}, 1000)

// Muestra inicialmente el tiempo restante
mostrarTiempoFaltante()
