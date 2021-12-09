class MayBe {
  static of(value) {
    return new MayBe(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    //异常数据直接返回null
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value));
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }
}

// const test = MayBe.of('test').map((item) => item.toUpperCase());
const test = MayBe.of(undefined).map((item) => item.toUpperCase());
console.log(test);
