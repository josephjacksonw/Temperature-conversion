// business logic
//function add(number1, number2) {
//  return number1 + number2;
//}

// user interface logic 
//const number1 = parseInt(prompt("Enter a number:"));
//const number2 = parseInt(prompt("Enter another number:"));

//window.alert(add(number1, number2));


// (32°F − 32) × 5/9 = 0°C
// window alert that takes in a single number
// convert it both ways and output them

function convertc(number1) {
  let number2 = (number1-32) / 1.8;
  return number2;
}

function convertf(number1) {
  let number2 = (number1 *1.8) + 32;
  return number2;
}

const number1 = parseInt(prompt("Enter a temperature to convert:"));

window.alert(
  number1 + " from farenheit to celsius is: " + convertc(number1) + "\n" +
  number1 + " from celsius to farenheit is: " + convertf(number1)
)