const conjunto = [[1, 2, 3, 3, 3], ['a', 'b', 'c'], [4, 5, 6, 7, 8, 9]]

let reducido = conjunto
				.reduce(
					(acumulador, item, indice) => {
						if(indice%2 == 0) {
							return acumulador.concat(item)
						}
						
						return acumulador
					}, 	
				[])
				.filter(item => !isNaN(item))
				.map(item => item*3)
				.filter(item => item%2 != 0)
				.filter((item, indice) => indice%2 == 0)
				.findIndex(item => {
					return item == 3
				})

console.log(reducido)