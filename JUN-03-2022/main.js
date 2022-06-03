/*

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

function descendingOrder(n){
    return Number(n.toString().split("").sort((a, b) => a - b).reverse().join(""));
  }
  /*
  -- n.toString() => Converts the input to string.
  -- .split("") => Converts the string to an array and split elements.
  -- .sort((a, b) => a - b) => Sort the elements of the array in ascending order.
  -- .reverse() => sort the array elements in descending order.
  -- .join("") => Converts the array to string again.
  -- Number() => Converts to number what is inside parenthesis.
  */


/*
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
    
    if(average >=90) {
      return "A"
    }
    else if(average >= 80) {
      return "B"
    }
    else if(average >= 70) {
      return "C"
    }
    else if(average >= 60) {
      return "D"
    }
    else { return "F"}
    
  }