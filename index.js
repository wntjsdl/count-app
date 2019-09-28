// 1. Object literal

// let count = 0;
// const counter = {
//   getCount: function() {
//     return count;
//   },
//   increment: function(number = 1) {
//     count += number;
//   },
//   decrement: function(number = 1) {
//     count -= number;
//   },
// }

// console.log(counter.getCount()); // 0
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // 2
// counter.decrement();
// console.log(counter.getCount()); // 1
// counter.increment(5);
// console.log(counter.getCount()); // 6
// counter.decrement(3);
// console.log(counter.getCount()); // 3
// counter.decrement(7);
// console.log(counter.getCount()); // -4


// 2. Constructor Function (legacy)

// const CounterApp = function(count) {
//   this.count = count;
//   this.getCount = function() {
//     return this.count;
//   }
//   this.increment =  function() {
//     this.count = this.count + 1;
//   }
//   this.decrement =  function() {
//     this.count = this.count - 1;
//   }
// };

// counter = new CounterApp(0);
// console.log(counter.getCount()); // 0
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // 2
// counter.decrement();
// console.log(counter.getCount()); // 1


// 3. Class (Modern / ES2015+)

class CounterApp {
  constructor(count) {
    this.count = count;
  };
  getCount() {
    return this.count;
  };
  increment() {
    this.count = this.count + 1;
  };
  decrement() {
    this.count = this.count - 1;
  };
}

CounterApp.prototype.increment = function() {
  this.count = this.count + 1;
};

const numberDiv = document.querySelector('.count-number');
const counter = new CounterApp(0);
numberDiv.innerHTML = counter.count;
document.querySelector('.incerement-btn').addEventListener('click', function(){
  counter.increment();
  numberDiv.innerHTML = "";
  numberDiv.innerHTML = counter.getCount();
});
document.querySelector('.decrement-btn').addEventListener('click', function(){
  counter.decrement();
  numberDiv.innerHTML = "";
  numberDiv.innerHTML = counter.getCount();
});

// console.log(counter.getCount()); // 0
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // 2
// counter.decrement();
// console.log(counter.getCount()); // 1