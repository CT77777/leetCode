/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  var array = [];
  for (let i = 0; i <= s.length - 1; i++) {
    array.push(s[i]);
  }

  for (let j = s.length - 1; j >= 0; j--) {
    s[array.length - 1 - j] = array[j];
  }
};
