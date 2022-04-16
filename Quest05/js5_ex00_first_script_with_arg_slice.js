let args = process.argv.slice(2);

let index = 0;

while (index < args.length) {
  console.log(args[index]);
  index++;
}

//let args = process.argv.slice(2) defines a variable (called args) for an array containing arguments (blah1, blah2, blah3) passed in terminal
//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string
//Slice(2) is (2) because the first element to print would be node [0],and the second element would be a path to the script [1]
//let index = 0; it is 0 because the loop count starts at 0
//Keyword "while" creates a loop of code as long as a specified condition is true: while(condition)
//(index < args.length) is a "while" keyword condition, "index" is a variable. "args" is a first variable that defined an array, see first note
//"length" is a property of arrays that returns or sets the number of elements in a given array (in this case 3 blahs)
//console.log(args[index]) args[index] is an array indexing to pull values from an array
//index++ adds 1 to the existing value
