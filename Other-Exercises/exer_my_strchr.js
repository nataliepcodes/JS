//Option 1
function my_strchr(string, character) {
  let index = 0;
  while (index < string.length) {
    if (string[index] == character) {
      return string.slice(1);
    }
    index++;
  }
  return null;
}

//Option 2

function my_strchr(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      return string.slice(1);
    }
  }
  return null;
}
console.log(my_strchr("abcabc", "b")); //"bcabc"
console.log(my_strchr("121212", "2")); //"21212"
console.log(my_strchr("abc", "d")); //null
