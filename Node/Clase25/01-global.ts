console.log(__dirname)
console.log(__filename)

setTimeout(()=> {
    console.log("setTimeout")
}, 0)

setImmediate(()=>{
    console.log("setImmediate")
})

process.nextTick(()=> {
    console.log("nextTick")
})



console.log(new Date())
console.log("Fin del proceso")