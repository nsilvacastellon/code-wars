/*
String begins with?:
Complete the solution so that it returns true if the first argument(string) passed in begins with the 2nd argument (also a string).

Examples:

solution('abc', 'ab') // returns true
solution('abc', 'c') // returns false

P: Parameters: 2 strings
R: Return: True or False
E: solution('abc', 'ab') // returns true
   solution('abc', 'c') // returns false
P: Iterate through the first argument and compare the second argument with the last characters of the first argument

*/
function startsWith(str, ending) {
    return str.startsWith(ending); // ANOTHER STRING METHOD: endsWith()
  }