/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  s = s.split("");
  console.log(s);
  let array = [];
  let counter = 0;
  let left = 0;
  let right = 0;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
    }
    if (s[i] === ")") {
      right++;
    }
    if (left === right && left > 0) {
      array.push(s.slice(counter, i + 1));
      counter = i + 1;
    }
  }
  console.log(array);
  for (let element in array) {
    array[element].shift();
    array[element].pop();
  }
  console.log(array);
  for (let element in array) {
    for (let uint in array[element]) {
      result += array[element][uint];
    }
  }
  //   console.log(result);
  //   result = result.replaceAll(",", "");
  console.log(result);
  return result;
};

let s1 = "()()()()()()(())(())()()((()))()(()(()))";
removeOuterParentheses(s1);

/**
Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
**/
