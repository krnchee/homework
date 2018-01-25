function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start, end-1);
  r.push(end-1);
  return r;
}

// console.log(`range(3, 10) = ${range(3, 10)}`);

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let lastNum = arr[arr.length - 1];
  return sumRec(arr.slice(0, arr.length-1)) + lastNum;
}

// console.log(sumRec([1,2,3,4,5]));

// # version 1
// exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)

function exponent(b, n) {
  if (n === 0) {
    return 1
  }

  return (b * exponent(b, n-1));
}

// console.log(`exp1(2, 4) = ${exponent(2, 4)}`);

function fibsRec(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}

// console.log(`fibsRec(5) = ${fibsRec(5)}`);

function bsearch(numbers, target) {
  if (numbers.length === 0) {
    return -1
  }

  let middleIDX = Math.floor(numbers.length/2);
  let middle = numbers[middleIDX];

  if (target === middle) {return middleIDX;}
  else if (target < middle) {
    return bsearch(numbers.slice(0,middleIDX));
  }
  else {
    const subProblem = bsearch(numbers.slice(middleIDX + 1), target);
    return subProblem === -1 ? -1 : subProblem + (middleIDX + 1);
  }
}

console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);
