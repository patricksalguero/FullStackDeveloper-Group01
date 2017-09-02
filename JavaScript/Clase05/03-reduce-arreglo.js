const conjunto = [[1, 2, 3, 3, 3], ['a', 'b', 'c'], [4, 5, 6, 7, 8, 9]]

// Los métodos de arreglos se pueden encadenar.
// La salida de cada uno (o sea el resultado) es la entrada del siguiente método
let reducido = conjunto
				.reduce(
					(acumulador, item, indice) => {
						// Concatena todos los elementos en un solo arreglo
						if(indice%2 == 0) {
							return acumulador.concat(item)
						}
						
						return acumulador
					}, 	
				[])
				// Retorna un arreglo que solo contiene a los elementos que son números
				.filter(item => !isNaN(item))
				// Multiplica cada uno de los elementos del arreglo por 3
				.map(item => item*3)
				// Retorna solo aquellos elementos que son impares
				.filter(item => item%2 != 0)
				// Retorna solo aquellos elementos cuyos índices son pares.
				.filter((item, indice) => indice%2 == 0)
				// Retorna el índice del primer elemento que cumple con la condición (item==3)
				.findIndex(item => {
					return item == 3
				})

console.log(reducido)