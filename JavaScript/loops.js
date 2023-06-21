// "I <3 Code" x10 times with WHILE

let nTimes = 0;

while (nTimes < 10) {
  console.log("I <3 Code");
  nTimes++;
}

// "I <3 Code" x10 times with FOR

let times = 10;

for (let counter = 0; counter < times; counter++) {
  console.log("I <3 Code");
}

// Print each letter on array

let letters = ["a", "b", "c", "d", "e"];

letters.forEach((letter) => {
  console.log(letter);
});

// Iterate until 0

let number = 5;

for (let index = 0; index <= number; number--) {
  console.log(number);
}

// Analyze DO - WHILE loop

let numero = 1;
let i = 0;

do {
  if (i === 0) {
    i++;
    numero--;
    console.log(numero);
  } else {
    numero++;
    console.log(numero);
  }
} while (numero < 5);

// En este bucle se ejecutaran como minimo 1 vez las instrucciones incluidas en el DO y si se cumplen las condiciones tras esto se ejecutaran las condiciones de WHILE.
// 1 -> El DO se ejecuta 1 vez, el if entra en la 1a iteracion
// 2 -> Al ajecutarse DO la primera vez (1ª iteracion) se cumple la primera condicion por lo que se suma 1 a "i" y se resta 1 a "numero"
// 3 -> En la siguiente iteracion (2ª iteracion) no se cumple el IF, pero si el ELSE, asi que se suma 1 a "numero"
// 4 -> El numero total de iteraciones seran 1 obligtoria para el DO, 1 mas como minimo para el ELSE y otras 4 hasta que "numero" sea 5. 6 en total
