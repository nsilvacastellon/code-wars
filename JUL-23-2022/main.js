/*
Switch it Up!:
When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
If your language supports it, try using a switch statement.
P: Parameters: a number between 0 and 9.
R: Return: the number in words
E: Input :: 1
  Output :: "One".
P: Pseudocode: Create an array with all the numbers in words (0 - 9). Compare the input with the
indexes of the array and return the value of the element according to the index.
function switchItUp(n){
  return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
*/
function switchItUp(number){
    let numbersToWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 
                             'Seven', 'Eight', 'Nine'];
    let validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return validNumbers.includes(number) ? numbersToWords[number] : 'Please enter a number 0 - 9';
    }