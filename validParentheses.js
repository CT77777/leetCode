/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let storage = [];
  let map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let element of s) {
    if (element === "(" || element === "{" || element === "[") {
      storage.push(element);
    } else {
      if (storage.pop() !== map.get(element)) {
        return false;
      }
    }
  }
  return true;
};
