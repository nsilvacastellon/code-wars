/*
Grasshopper - Messi goals function:
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
P: Parameters: 3 numbers.
R: Returns: 1 number.
E: Examples: 5, 10, 2  -->  17
P: Pseudocode: Add all 3 numbers from the input and return the sum.
ANOTHER SOLUTION: (NO MATTER HOW MANY ARGUMENTS PASSED TO TO FUNCTION, USING SPREAD OPERATOR)
const goals2 = (...a) => a.reduce((s, v) => s + v, 0);
*/
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }