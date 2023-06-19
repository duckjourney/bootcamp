// let nombre = "Miguel"
// window.alert(nombre)

// let nombre = window.prompt("Whats your name?")
// window.alert(nombre)

var nombre // Declaracion
nombre = "Miguel" // Inicializacion
let apellido = "Leborán" // Declaracion + inicializacion
const edad = 27 // Declaracion + inicializacion

console.log(nombre, apellido, edad) 
console.log(typeof(nombre), typeof(apellido), typeof(edad))

let species = "human" // Scope global

function scopeLocal() {
    let heigth = 1.72 // Scope local
    console.log(heigth)
}

scopeLocal()




