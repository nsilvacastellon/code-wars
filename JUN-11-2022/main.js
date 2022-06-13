/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

function removeEveryOther(arr){
    return arr.map((element, index) => {
      if(index === 1 || index % 2 !== 0) {
        return 0
      } 
      return element;
    });
  }
  
  console.log(removeEveryOther(["keep", "remove", "keep", "remove", "keep", "remove"]));