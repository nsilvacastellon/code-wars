/*
Duplicate Encoder:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

P: Parameters: a string.
R: Return: a new string; replace each character with "(" if character only once and ")" if the character appears more than one.
E: Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
P: Pseudocode: separate the string by individual character and test if the character appears more than once 
and replace the character with the according character.
*/


function duplicateEncode(word){ //function
    word = word.toLowerCase();
    let newString = [];
    for(let i = 0; i < word.length; i++) { //for loop
      if(word.lastIndexOf(word[i]) == word.indexOf(word[i])) { //if
        newString.push("(");
      } //if
      else { //else
        newString.push(")");
      } //else
    } //for loop
  return newString.join("");
} // function