//fibonacci sequence is a series of numbers
//number = 0, then n is adding the two numbers before it
//Number     : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...
//FibNumbr   : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
//Create a function my_fibonacci that returns the n-th element of the Fibonacci sequence, the first element being at the 0 index. We'll consider that the Fibonacci sequence starts like this: 0, 1, 1, 2.
//If the value is less than 0, the function should return -1.

function my_fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return my_fib(n - 1) + my_fib(n - 2);
  }
}
console.log(my_fib(2));
console.log(my_fib(3));
console.log(my_fib(4));
