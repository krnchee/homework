function sum1() {
  let total = 0;
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
}

function sum2(...nums) {
  sum = nums.reduce((acc, num) => acc+= num)
  return (sum);
}

console.log(sum2(1,1,2,3,4));

Function.prototype.myBind1 = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};


Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};
