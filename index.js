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
// 생성자 인자 받을때 {} 객체 사용하기
// innerHTML 보단 textContent 사용하기
// init 함수 넣어서 사용하기

class CounterApp {
  constructor(count) {
    this.count = count;
  };
  getCount() {
    return this.count;
  };
  increment(value = 1) {
    this.count = this.count + value;
  };
  decrement(value = 1) {
    this.count = this.count - value;
  };
  reset() {
    this.count = 0;
  };
}

const numberDiv = document.querySelector('.count-number');
const counter = new CounterApp(0);
let value = 0;
numberDiv.innerHTML = counter.count;
document.querySelector('.incerement-btn').addEventListener('click', function(){
  value = document.querySelector('#value').value;
  if (value === '') {
    value = 1;
  } else {
    value = parseInt(value);
  }
  counter.increment(value);
  numberDiv.innerHTML = "";
  numberDiv.innerHTML = counter.getCount();
});
document.querySelector('.decrement-btn').addEventListener('click', function(){
  value = document.querySelector('#value').value;
  if (value === '') {
    value = 1;
  } else {
    value = parseInt(value);
  }
  counter.decrement(value);
  numberDiv.innerHTML = "";
  numberDiv.innerHTML = counter.getCount();
});
document.querySelector('.reset-btn').addEventListener('click', function(){
  counter.reset();
  numberDiv.innerHTML = "";
  numberDiv.innerHTML = counter.getCount();
});

// console.log(counter.getCount()); // 0
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // 2
// counter.decrement();
// console.log(counter.getCount()); // 1