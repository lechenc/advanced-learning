const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  //promise状态
  status = PENDING;
  //成功之后的值
  value = undefined;
  //失败后的原因
  error = undefined;
  //成功回调
  successCallback = [];
  //失败回调
  failCallback = [];
  resolve = (value) => {
    //如果不是等待状态，阻止向下执行
    if (this.status !== PENDING) return;
    //更改状态为成功
    this.status = FULFILLED;
    //保存成功值
    this.value = value;
    //判断是否存在成功回调
    this.successCallback.forEach((item) => {
      item(this.value);
    });
  };
  reject = (error) => {
    //如果不是等待状态，阻止向下执行
    if (this.status !== PENDING) return;
    //更改状态为失败
    this.status = REJECTED;
    //保存失败原因
    this.error = error;
    //判断是否存在失败回调
    this.failCallback.forEach((item) => {
      item(this.error);
    });
  };
  then(successCallback, failCallback) {
    //判断状态成功还是失败
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          const value = successCallback(this.value);
          resolvePromise(promise, value, resolve, reject);
        }, 0);
      } else if (this.status === REJECTED) {
        failCallback(this.error);
      } else {
        //解决异步问题
        this.successCallback.push(successCallback);
        this.failCallback.push(failCallback);
      }
    });
    return promise;
  }
}

function resolvePromise(promise, value, resolve, reject) {
  //promise自己返回自己
  if (promise === value) {
    return reject(new TypeError('promise反复调用'));
  }
  //判断value是普通值还是promiser对象
  if (value instanceof MyPromise) {
    //如果是promise对象 查看promise对象返回的结果
    //根据结果 决定调用resolve或reject
    value.then(resolve, reject);
  } else {
    //如果是普通值 直接调用resolve
    resolve(value);
  }
}

module.exports = MyPromise;
