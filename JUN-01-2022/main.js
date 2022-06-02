// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareNumSum(numbers) {
  return numbers.reduce( (acc, c) => acc + (c * c), 0);
};

/*

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("world war"));