class Left {
  static of(value) {
    return new Left(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return this;
  }
}

class Right {
  static of(value) {
    return new Right(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return Right.of(fn(this._value));
  }
}

// const left = Left.of(10).map((x) => x + 2);
// const right = Right.of(10).map((x) => x + 2);
// console.log(left, 'left');
// console.log(right, 'right');

function parseJSON(str) {
  try {
    return Right.of(JSON.parse(str));
  } catch (error) {
    return Left.of({ error: error.message });
  }
}
const err = parseJSON('{name:"test"}');
console.log(err);
const data = parseJSON('{"name":"test"}');
console.log(data);
