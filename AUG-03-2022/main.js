/*
Mumbling:
This time no story, no theory. The examples below show you how to write function accum:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
P: Parameters: A string.
R: Return: A string.
E: Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
P: Pseudocode: Split the string and iterate trhough all characters. Take each character and convert it to uppercase and repeat each character (x times)
depending on the position of the character in the string and add a '-' at the end of each character.
*/
function letters(letter) {
    return letter.split('').map((element, index) => element.toUpperCase() + element.toLowerCase().repeat(index)).join('-');
  }