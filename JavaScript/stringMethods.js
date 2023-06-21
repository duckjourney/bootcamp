// Change "a" -> "o"

function changeLetter(phrase) {
  let newPhrase = "";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === "a") {
      newPhrase += "o";
    } else {
      newPhrase += phrase[i];
    }
  }
  console.log(newPhrase);
}

changeLetter("supercalifragilistica");

// Check if start with "aca"

function startsWith(phrase) {
  if (phrase.startsWith("aca")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

startsWith("escuela");

// Say HI!

function sayHi(wave) {
  if (wave === "Hola") {
    console.log(wave.toUpperCase(wave))
    console.log(wave.toLowerCase(wave))
    console.log(wave.repeat(3))
  }
}

sayHi("Hola")

