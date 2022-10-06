
/*
Remove String Spaces:
Simple, remove the spaces from the string, then return the resultant string.
P: Parameters: A string with spaces before, after and in between.
R: Return: A string with no spaces, a whole string.
E: Example: assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
P: Pseudocode: Iterate through the string and select characters and put them together filtering empty spaces.
ANOTHER SOLUTION:
function noSpace(x) {
  return x.split(' ').join('');
}
*/
let noSpace = (str) => str.split(' ').filter(character => character !== '').join('');