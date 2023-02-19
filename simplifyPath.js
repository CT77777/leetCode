/**
 * @param {string} path
 * @return {string}
 */
// var simplifyPath = function (path) {
//   if (path[0] !== "/") {
//     path = "/" + path;
//   }

//   if (path[path.length - 1] === "/") {
//     path = path.slice(0, -1);
//   }

//   let count1 = 0;
//   for (let i = 0; i < path.length; i++) {
//     if (path[i] === ".") {
//       if (count1 === 1) {
//         path = path.slice(0, i - 1) + path.slice(i + 1);
//       } else {
//         count1++;
//       }
//     } else {
//       if (count1 === 1) {
//         count1--;
//       }
//     }
//   }

//   let count2 = 0;
//   for (let i = 0; i < path.length; i++) {
//     if (path[i] === "/") {
//       if (count2 === 1) {
//         path = path.slice(0, i) + path.slice(i + 1);
//       } else {
//         count2++;
//       }
//     } else {
//       if (count2 === 1) {
//         count2--;
//       }
//     }
//   }
//   console.log(path);
//   return path;
// };

var simplifyPath = function (path) {
  let array = path.split("/");
  console.log(array);
};

let path = "/home//foo/";
simplifyPath(path);
