// Replace all elementos from pizza for beers

let menu = ["🍔", "🥙", "🍣", "🍕", "🍜", "🥗", "🍚", "🍙", "🥑"]
let newMenu = menu.fill("🍺", 4)
console.log (newMenu)

// Check of theres pinneaple

let pizza = ["🍕","🍕","🍍","🍕","🍕"]
let checkIfPinneaple = pizza.includes("🍍")
console.log(checkIfPinneaple)

// Remove pinneaple from the array (using let pizza = ["🍕","🍕","🍍","🍕","🍕"] from last exercise)

let pizzaWithoutPineapple = pizza.filter(item => item !== "🍍");
console.log(pizzaWithoutPineapple);

// Convert starwberry to mushroom

let justFruits = ["🍓", "🍋","🍓", "🍋"]

let includeMushroom = justFruits.map(fruit => {
  if (fruit === "🍋") {
    return "🍄";
  }
  return fruit;
});

console.log(includeMushroom);
