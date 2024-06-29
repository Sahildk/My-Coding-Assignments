function formatNumber(number, decimalPlaces) {
  // Round the number to the specified decimal places
  let roundedNumber = Number(number.toFixed(decimalPlaces));

  // Return the rounded number as a string
  return roundedNumber.toLocaleString();
}
let number2 = 9876.54321;
let formatted2 = formatNumber(number2, 3);
console.log(formatted2);
