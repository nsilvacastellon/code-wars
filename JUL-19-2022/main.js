/*
Detect Pangram:
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
P: Parameters: A string
R: Returns: Boolean value
E: Examples: The quick brown fox jumps over the lazy dog" => true
P: Pseudocode: iterate through every character of the string (input) and compare it to the abc array(whole abc letters) and push it to a new array only
if the character does not already exist in the new array. If the new array length is equal to the abc array length return true, else return false.

ANOTHER SOLUTION:

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

*/
function isPangram(str){
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let wholeABC = [];
    let str2 = str.toLowerCase();
    for (let i = 0; i < str2.length; i++) {
      if(abc.includes(str2[i]) && !(wholeABC.includes(str2[i]))) {
        wholeABC.push(str2[i]);
      }
      
    }
    return wholeABC.length === abc.length ? true : false;
  }