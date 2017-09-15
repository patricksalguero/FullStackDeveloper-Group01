(function(w, d){
	w.addEventListener("load", function(){
		console.log("Evento Load")
	})

	d.addEventListener("DOMContentLoaded", function(){
		console.log("Evento DOMContentLoaded")
	})

})(window, document)