const fs = require('fs');
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
  join() {
    return this._value;
  }
  flatMap(fn) {
    return this.map(fn).join();
  }
}

let readFile = function (filename) {
  return new IO(function () {
    return fs.readFileSync(filename, 'utf-8');
  });
};
let print = function (x) {
  return new IO(function () {
    console.log(x, '11111111111');
    return x;
  });
};
// IO(IO(x))
let cat = fp.flowRight(print, readFile);
// 调用
let r = cat('1 MayBe.js')._value()._value();
console.log(r, '2222222222');
