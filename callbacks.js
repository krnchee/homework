// window.setTimeout(function() {
//   alert('Hammer Time');
// }, 5000);
//
// function hammertime(time) {
//   window.setTimeout(function() {
//     alert('Hammer Time');
//   }, time);
// };



const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNum (callback) {
  reader.question('first num?', function (num1) {
    // console.log(`${num1}`)
    callback(num1);
});
}

function addTwoNumbers(callback) {
  // Notice how nowhere do I return anything here! You never return in
  // async code. Since the caller will not wait for the result, you
  // can't return anything to them.

  reader.question("Enter #1: ", function (numString1) {
    reader.question("Enter #2: ", function (numString2) {
      const num1 = parseInt(numString1);
      const num2 = parseInt(numString2);

      callback(num1 + num2);
    });
  });
}


addNum(function (result) {
  console.log(`${result}`);
  reader.close();
});
