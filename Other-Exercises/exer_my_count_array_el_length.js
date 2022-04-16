function my_count_on_it(array) {
  let elementLength = array.map((x) => x.length);
  return elementLength;
}
console.log(my_count_on_it(["This", "is", "the", "way"]));
