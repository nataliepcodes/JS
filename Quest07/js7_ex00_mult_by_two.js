//Multiply elements of an array
//option 1
function my_map_mult_two_op_one(arrayOne) {
  let resultArrayOne = arrayOne.map((arrayElement) => arrayElement * 2);
  return resultArrayOne;
}
console.log(my_map_mult_two_op_one([1, 2, 3, 4, 5]));

//option 2
let arrayTwo = [1, 2, 3, 4, 5];
let resultArrayTwo = arrayTwo.map((x) => x * 2);
console.log(resultArrayTwo);

//option 3
let arrayThree = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayThree.length; i++) {
  arrayThree[i] *= 2;
}
console.log(arrayThree);

//option 4
function my_map_mult_two_op_four(arrayFour) {
  let i = 0;
  while (i < arrayFour.length) {
    arrayFour[i] = arrayFour[i] * 2;
    i++;
  }
  return arrayFour;
}
console.log(my_map_mult_two_op_four([1, 2, 3, 4, 5]));

//option 5
function my_map_mult_two_op_five(arrayFive) {
  for (let i = 0; i < arrayFive.length; i++) {
    arrayFive[i] = arrayFive[i] * 2;
  }
  return arrayFive;
}
console.log(my_map_mult_two_op_five([1, 2, 3, 4, 5]));
