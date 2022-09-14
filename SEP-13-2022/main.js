/*
String repeat:
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

P: Parameters: a number and a string.
R: Return: a string(s) repeated exactly n times
E: Examples:
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");

P: Pseudocode: Get n and repeat s number of times.
*/

function repeatStr (n, s) {
    return s.repeat(n);
  }
  