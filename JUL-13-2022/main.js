/*
P: Parameters: 2 numbers
R: RETURN: one array
E: Examples: 
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

P: Pseudocode: Get 2 numbers as arguments. Increment the first number as many times the second number is and push it to the array.

*/

function countBy(x, n) {
    var z = [];
    for (var i = x; i <= (x * n); i += x){
    z.push(i);
    }
    return z
    }