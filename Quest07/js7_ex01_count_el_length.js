//Count the length of each element in the string array

function my_count_on_it(arrayA) {
  let elementLength = arrayA.map((x) => x.length);
  return elementLength;
}
console.log(["This", "is", "the", "way"]);
