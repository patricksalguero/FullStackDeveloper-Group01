// Estructura de control: for - lazo o bucle

/*
	Tiene 3 parámetros:
	1. Indica el inicio del bucle
	2. Restringe la cantidad de vueltas o bucles que se ejecutarán
	3. Indica el bucle que se ejecutará luego de terminado uno
*/


/*
	Equivalentes:
	
		corredor = corredor + 1
		corredor += 1
		corredor++
*/


for(let corredor = 0; corredor < 20; corredor = corredor + 1){
	console.log(corredor)
}

for(let corredor = 0; corredor < 20; corredor += 1){
	console.log(corredor)
}

for(let corredor = 0; corredor < 20; corredor++){
	console.log(corredor)
}