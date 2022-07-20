/*
String ends with?:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

P: Parameters: 2 strings
R: Return: True or False
E: solution('abc', 'bc') // returns true
   solution('abc', 'd') // returns false
P: Iterate through the first argument and compare the second argument with the last characters of the first argument

*/
function solution(str, ending) {
    return str.endsWith(ending);
  }