/*
Beginner - Lost Without a Map:
iven an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
P: Parameters: An array of integers.
R: Return: A new array.
E: Example: [1, 2, 3] --> [2, 4, 6]
P: Pseudocode: Iterate through the array elements and multiply each element by 2.
*/

function maps(x){
    return x.map(element => element * 2);
  }
  console.log(maps([1, 2, 3]))