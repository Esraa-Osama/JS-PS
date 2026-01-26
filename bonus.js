//~ Assignment 1 ~//

// **** C. PART 3: Bonus **** //

var createCounter = function (init) {
  if (init >= -1000 && init <= 1000) {
    let changingValue = init;
    return {
      increment: function () {
        return (changingValue += 1);
      },
      decrement: function () {
        return (changingValue -= 1);
      },
      reset: function () {
        return (changingValue = init);
      },
    };
  }
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
