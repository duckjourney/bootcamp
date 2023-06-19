
// Arrow fun with return
const username = (name, surname) => {
    return (name + " " + surname)
}
console.log(username("Miguel", "Leborán"))

// Named fun without return

function booleanData(boolean) {
    console.log(boolean)
}
booleanData(true)

// forEach fun

const numberArray = function (...numbers) {
    numbers.forEach(number => {
        console.log(number)
    })
}

numberArray(1,2,3,4,5)




