const MyPromise = require('./myPromise');

const promise = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //   // reject('失败');
  // }, 2000);
  resolve('成功');
});

function other() {
  return new MyPromise((resolve, reject) => {
    resolve('othen');
  });
}

const test = promise.then(
  (value) => {
    console.log(value, 'value1');
    return test;
  },
  (error) => {
    console.log(error);
  },
);
test.then(
  (value) => {
    console.log(value, 'value2');
  },
  (error) => {
    console.log(error);
  },
);
