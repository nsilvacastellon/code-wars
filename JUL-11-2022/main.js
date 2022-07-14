/*
Find the stray number:
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

P: Parameters: Odd array of numbers
R: Return: The number not equal in the array.
E: Examples: [1, 1, 2] ==> 2
            [17, 17, 3, 17, 17, 17, 17] ==> 3
P: Pseudocode: Sort the array, then compare the index[0] array with the index[1] array and if they're equal it means the last element of the array is different, or if they're not equal it means that the first element of the array is different and then we return the different number in the array.


*/

function stray(numbers) {
    let sortedElements = numbers.sort((a, b) => a - b);
    if(sortedElements[0] != sortedElements[1]) {
      return sortedElements[0];
    }
    else {
      return sortedElements[sortedElements.length - 1]
    }
    
  }