const NUMS = [1,2,3,4,5];


Array.prototype.myForEach = function(cb) {
  for (i=0; i<this.length; i++) {
    cb(this[i]);
  }
};

// NUMS.myForEach((num) => console.log(`square of ${num} is ${num * num}`));


Array.prototype.myMap = function(cb) {
  const mapArr = [];
  this.myForEach(num => mapArr.push(cb(num)))
  return mapArr;
};

// console.log(NUMS.myMap( num => num * num ));

Array.prototype.myReduce = function(cb, acc) {

  arr = this;

  if (!acc) {
    acc = arr[0];
    arr = arr.slice(1);
  }

  let total = acc;

  arr.myForEach(num => total = cb(total, num));

  return total;
};

console.log(NUMS.myReduce( (total, item) => total + item ));
