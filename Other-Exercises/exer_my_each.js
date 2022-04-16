function my_each(array) {
  index = 0;
  while (index < array.length) {
    console.log(array[index]);
    index++;
  }
}
/* my_each(["blah1", "blah2", "blah3"]);
my_each(["blah1", "blah2"]);
my_each(["1arg"]); */

//forEach
function my_each(array) {
  array.forEach((element) => console.log(element));
}
/*
my_each(["blah1", "blah2", "blah3"]);
my_each(["blah1", "blah2"]);
my_each(["1arg"]); */
