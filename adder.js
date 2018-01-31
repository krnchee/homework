const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft) {
  if (numsLeft > 0) {
    reader.question("give me number:", function(num) {
      const number = parseInt(num);

      sum += number;
      console.log(`partial sum = ${sum}`);

      addNumbers(sum, numsLeft-1);
    } )
  }
  else {
    console.log(`total sum = ${sum}`);
    reader.close();
  }
}

addNumbers(0, 3);
