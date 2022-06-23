/*

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

function removeExclamationMarks(s) {
    return s.split("").filter(element => element != "!").join("");
  }
  
  /*
  - split("") -- Converts the string into an array and separate every character of the string, so we can use array methods
  - filter(element => element != "!") -- Loops inside all array elements(characters) and filter to a new array all elements
  that pass the condition(all characters except "!").
  - join("") -- Converts the array into a string again.
  */