function my_recursive_pow(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * my_recursive_pow(base, exponent - 1);
  }
}
console.log(my_recursive_pow(2, 2));
console.log(my_recursive_pow(2, 3));
console.log(my_recursive_pow(2, 4));
//recursive means executed repeatedely, calls the func within the same func
//different from iteration
//iteration is a set of instructions exec repeatedly until condition is true
//the func calls inself multiple times to with ever smaller exponents to achieve a repeated multiplication
//exponentiation is the operation of raising one quantity to the power of another
//The exponent of a number says how many times to use the number in a multiplication. 8˚
