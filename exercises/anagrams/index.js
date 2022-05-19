// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Clean 1st and second string and split the first and second strings into an array of characters
  const first = stringA.replace(/[^\w]/g, '').split('');
  const second = stringB.replace(/[^\w]/g, '').split('');

  // Initialise a variable that will be used to check the current letter of stringA against stringB
  // Start it with the first letter in stringA
  let currentLetter = first[0];

  // Loop through the first string
  for (let i = 0; i < first.length; i++) {
    // If the second string doesnt include the first string then return false
    if (!second.includes(currentLetter)) {
      return false;
    } else {
      // Otherwise if the current letter is the last letter of the first array return true
      if (currentLetter == first[first.length - 1]) {
        return true;
      } else {
        // But if the second string still has letters that havent been checked return false
        if (second.length > first.length) {
          return false;
        } else {
          // Otherwise current letter checked becomes the next letter in the array
          currentLetter = first[i + 1];
        }
      }
    }
  }
}

/* 
ANAGRAMS SOLUTION 2:
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

*/

module.exports = anagrams;
