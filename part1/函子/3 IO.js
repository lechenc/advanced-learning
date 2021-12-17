const fp = require('lodash/fp');

class IO {
  static of(value) {
    return new IO(function () {
      return value;
    });
  }
  constructor(fn) {
    this._value = fn;
  }
  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }
}

//调用
// const data = IO.of(process)
// console.log(data._value(),'data');
const data = IO.of(process).map((p) => p.versions);
console.log(data._value(), 'data');
