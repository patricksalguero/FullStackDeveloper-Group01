/*
	La instrucción "for" tiene 3 parámetros:
		1. Indica cuál será el primer bucle
		2. Restringe la cantidad de bucles
		3. Pasa a otro bucle

	Las 3 formas del tercer parámetro son equivalentes:
		corredor = corredor + 1
		corredor += 1
		corredor++
*/
for(let corredor = 0; corredor < 10; corredor = corredor + 1){

}

for(let corredor = 0; corredor < 10; corredor += 1){

}

for(let corredor = 0; corredor < 10; corredor++){
	
}

/*
	La instrucción "for" también puede ir de forma decreciente
*/
for(let corredor = 9; corredor >= 0; corredor = corredor - 1){

}

for(let corredor = 9; corredor >= 0; corredor -= 1){

}

for(let corredor = 9; corredor >= 0; corredor--){
	
}

/*
	El paso de los bucles no tiene porqué ser siempre de uno en uno.
	Puede ser en otras cantidades
*/
for(let corredor = 0; corredor < 10; corredor = corredor + 5){

}

for(let corredor = 0; corredor < 10; corredor += 2){

}

for(let corredor = 9; corredor >= 0; corredor -= 3){

}
