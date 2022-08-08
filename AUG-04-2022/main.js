/*
Sum Mixed Array:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
P: Parameters: An array of integers as strings and numbers.
R: Return: The sum of the array values as if all were numbers.
E: Example:
    assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
    assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
P: Pseudocode: Iterate through all array elements the ones that are string convert to integer (multiplying * 1) and add them all together.
*/
function sumMix(x){
    return x.reduce((accum, element) => accum + (element * 1), 0);
    }