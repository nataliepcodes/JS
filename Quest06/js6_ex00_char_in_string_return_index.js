//Function to return a character position (index position) within the string
//String index starts with 0
//While is looping through each character in the string to return a position of the character in the string
//If character is not located within the string a return is -1
function my_string_index(string, character) {
  let index = 0;
  while (index < string.length) {
    if (string[index] == character) {
      return index;
    }
    index++;
  }
  return -1;
}
//console.log(my_string_index("hello", "l"));
//console.log(my_string_index("aaaaa", "b"));
