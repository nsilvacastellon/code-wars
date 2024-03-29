/*
Find the odd int:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
P: Parameters: An array of integers.
R: Return: An integer.
E: Example: [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
P: Pseudocode: Iterate through all array elements and count the occurence of each element and return the element with odd number of times.
OTHER SOLUTION:
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
*/
function findOdd(A) {
    let count = {};
    for(const element of A) {
      if(count[element]) {
        count[element] += 1;
      } else { count[element] = 1}
    }
    for(const prop in count) {
      if(count[prop] % 2 !== 0) return Number(prop);
    }
    
  }