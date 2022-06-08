/*

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

P - Parameters: a string

R - Returns: Complementary part of the string. Symbols "A" and "T" are complements of each other, as "C" and "G".

E - Examples: "ATTGC" --> "TAACG"
              "GTAT" --> "CATA"

P - Pseudocode: The function receives a string and must replace character passed: A with T or viceversa, C and G OR viceversa.

Other solution:

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

*/


function DNAStrand(dna) {
    return dna.split('').map(element => {
      if(element === 'A') {
        return element.replace('A', 'T')
      }
      else if(element === 'T') {
        return element.replace('T', 'A')
      }
      else if(element === 'C') {
        return element.replace('C', 'G')
      }
      else if(element === 'G') {
        return element.replace('G', 'C')
      }
    }).join('');
  }