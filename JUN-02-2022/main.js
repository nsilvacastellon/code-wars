/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
    return parseInt(num.toString().split("").map(element => element * element).join(""));
    //num.toString() => converts the input to string
    //.split("") => converts the string to an array and split elements
    //.map(element => element * element) => create a new array and loop through elements and multiply them by them self.
    //.join("") => converts the array to a string again.
    //parseInt() => converts to an integer what is inside the parenthesis.
  }