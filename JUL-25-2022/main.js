/*
Beginner - Reduce but Grow:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

P: Parameters: An array of integers.
R: Return: The product of all numbers.
E: Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
P: Pseudocode: Iterate through all array elements (input) and multiply all elements
*/

function grow(x){
    return x.reduce((accu, element) => accu * element, 1);
  }