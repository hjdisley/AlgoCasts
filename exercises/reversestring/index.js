// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution 1
  //   return str.split('').reverse().join('');

  // Solution 2
  //   let newStr = '';
  //   for (let char of str) {
  //     console.log(char);
  //     newStr = char + newStr;
  //   }
  //   return newStr;

  //Solution 3
  const stringArr = str.split('');
  return stringArr.reduce((newStr, char) => {
    return char + newStr;
  }, '');
}

reverse('hello');

module.exports = reverse;
