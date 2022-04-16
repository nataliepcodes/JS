function my_array_uniq(array) {
  let result = [...new Set(array)];
  return result;
}
//console.log(my_array_uniq([1, 1, 2]));
//console.log(my_array_uniq([]));
//console.log(my_array_uniq([1, 1, 1, 2, 3, 4, 1]));
