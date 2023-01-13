// wrapper function

// (function (exports, require, module, __filename, __dirname) {
//   console.log("vasanth");

//   let age = 10;
//   console.log(age);
// })();

// // Immediately Invoke function expression
// let sum = (function (n1, n2) {
//   //   console.log(n1 + n2);
//   return n1 + n2;
// })(10, 20);

// // let sum = add(10, 2);
// console.log(sum);

// const axios = require("axios");
// console.log("filename", __filename);
// console.log("directory name", __dirname);
// console.log("module", module);
// console.log("exports", exports);
// console.log("vasanth");

// let age = 10;
// console.log(age);

function display(message) {
  console.log(message);
}

function add(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

// default
// module.exports = display;

// named export
// module.exports.display = display;
// module.exports.add = add;

global.display = display;

// console.log(global);

// module.exports.add = add;
// module.exports.sub = sub;

// console.log("logger", module.exports);
