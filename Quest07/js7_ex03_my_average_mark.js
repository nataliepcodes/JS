//FUNCTION TO RETURN AND AVERAGE RESULT OF INTEGER ELEMENTS VALUE
function my_average_mark(array) {
  let averageResult =
    array.reduce((sum, currentValue) => sum + currentValue.integer, 0) /
    array.length;
  return averageResult.toFixed(1);
}
//call back function is executed multiple times, each time currentValue is set to an element inside the array
//each call gets a currentValue and adds it to the sum/total
//sum is initialised to 0 which is an initial value for the sum (meaning: let sum = 0;)
//The toFixed() method formats a number using fixed-point notation; toFixed(digits)

console.log(
  my_average_mark([
    { string: "John", integer: 7 },
    { string: "Margot", integer: 8 },
    { string: "Jules", integer: 4 },
    { string: "Marco", integer: 19 },
  ])
);

console.log(
  my_average_mark([
    { string: "Quentin", integer: 1 },
    { string: "Fred", integer: 1 },
    { string: "Julia", integer: 18 },
    { string: "stephanie", integer: 13 },
  ])
);
console.log(my_average_mark([]));
