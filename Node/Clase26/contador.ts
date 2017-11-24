export const longitud = (arr: any[]) => {
	return arr.length
}

export const saludos = (arr: string[]) => {
	return arr.map((item: string) => {
		return `Hola ${item}`
	})
}