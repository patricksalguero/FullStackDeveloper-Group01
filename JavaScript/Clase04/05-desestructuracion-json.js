const misRedes = {
	facebook: "https://facebook.com/sergio.hidalgo.14",
	twitter: "https://twitter.com/shidalgo2012",
	linkedin: "https://linkedin.com/sergiohidalgoc2013",
	instagram: "https://instagram.com/sergio2011hidalgo"
}
/*
const facebook = misRedes.facebook
const twitter = misRedes.twitter
const instagram = misRedes.instagram
const youtube = misRedes.youtube
*/

// Desestructuración de un json en variables.
// Las variables pueden tener valores por defecto
const {twitter, linkedin, facebook = "tampoco tiene facebook", youtube = "no tiene youtube"} = misRedes


console.log(facebook)
console.log(twitter)
console.log(linkedin)
console.log(youtube)