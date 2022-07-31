/*
Jaden Casing Strings:
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

P: Parameters: A string.
R: Return: A string.
E: Examples: Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
             Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
P: Pseudocode: Split the string by word. Change to upper case the first character of every
word and then add the rest of characters as they were input.
OTHER SOLUTION:
String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};

*/
String.prototype.toJadenCase = function () {

    //(str) => str.split(" ").map((element, index) => index === 0 ? element.toUpperCase() : element).join("");
    
   return this.split(' ').map(element => element[0].toUpperCase() + element.slice(1)).join(' ');
        
  };
  