
// Fun con return que devuelve cara si el resultado es 1 y cruz si es 0

function caraOCruz() {

    let whichOne = Math.round(Math.random())

    if (whichOne == 0) {
        console.log(whichOne)
        return "Cruz"
    } else {
        console.log(whichOne)
        return "Cara"
    }
}

console.log(caraOCruz())


// Fun que recibe 3 num como parametros y los suma

function sum3Numbers(num1, num2, num3) {
    return (num1+num2+num3)
}

console.log(sum3Numbers(1,2,3))

// Fun que recibe nombre y apellidos, concatena e imprime por pantalla

function nameAndSurname(name, surname, surname2) {
    return (name + " " + surname + " " + surname2)
}

console.log (nameAndSurname("Miguel", "Leborán", "Rodríguez"))

// Fun que recibe dos numeros diferentes y devuelve el mayor

function getHigher(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

console.log (getHigher(10,4))


