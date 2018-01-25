Array.prototype.uniq = function () {
  let uniqArray = [];

  this.forEach(function (el){
    if (!uniqArray.includes(el)) {
      uniqArray.push(el);
    }
  })
  return uniqArray;
};

// console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function() {
  let sumArr = [];

  for (i = 0; i < this.length; i++) {
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sumArr.push([i,j]);
      }
    }
  }
  return sumArr;
}

// console.log([-1, 0, 2, -2, 1].twoSum());


Array.prototype.transpose = function() {
  const transArr = Array.from(
    {length: this[0].length},
    () => Array.from({length: this.length})
  );



  console.log(transArr);

  for (i = 0; i < this.length; i++) {
    for (j = 0; j < this.length; j++) {
      transArr[j][i] = this[i][j];
    }
  }
  return transArr;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
