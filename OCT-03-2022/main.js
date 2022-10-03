/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
P: Parameters: A string 2 charaters or more
R: Return: A string
E: Examples: assert.strictEqual(removeChar('eloquent'), 'loquen');
P: Pseudocode: Get the first and last character of the string and remove them.
*/

function removeChar(str){
    // removeFirstLast = str.split('');
    // removeFirstLast.shift();
    // removeFirstLast.pop();
    // return removeFirstLast.join('');
    return str.slice(1, -1)
  
  };