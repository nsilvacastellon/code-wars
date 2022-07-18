/*
Disemvowel Trolls:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

P: Parameters: a string.
R: Return: Same string with vowels fitered out.
E: Example: "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
P: Pseudocode: Split the string by single characters, loop through them and compare each character with an array that
contains all the vowels lowercase and uppercase. If the character is inside the array, replace it with an empty character, 
and then finally return all character that pass the test and join the string again.
*/
function disemvowel(str) {
    let noVowels = [];
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').map(element => (vowels.includes(element) ? '' : element)).join('')
    
  //   for(let i = 0; i < str.length; i++) {
  //     if(!(vowels.includes(str[i]))) {
  //       noVowels.push(str[i]);
  //     }
  //   }
  
  // return noVowels.join('')
    
  /*
  