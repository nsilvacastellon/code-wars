/*
Reversed sequence:

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

P: Parameters: a number (n)
R: Returns: an array of integers from n to 1
E: Examples: Example : n=5 --> [5,4,3,2,1]
P: Pseudocode: get a number as parameter (n). Loop from 1 to the number (n) and get an array and then reverse the array and
return it.

*/
const reverseSeq = n => {
    let reverseArray = [];
    for (let i = 1; i <= n; i++) {
      reverseArray.push(i);
    }
    return reverseArray.reverse();
    
  };