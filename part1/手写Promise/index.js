const MyPromise = require('./myPromise');

// const promise = new MyPromise((resolve, reject) => {
//   resolve('成功');
// });

// const p1 = promise.then(() => {
//   return p1;
// });
// console.log(p1, 'p1');

function p1(params) {
  return new MyPromise((resolve) => {
    setTimeout(() => {
      resolve(4);
    }, 2000);
  });
}
function p2(params) {
  return new MyPromise((resolve) => {
    resolve(5);
  });
}

MyPromise.all([1, 2, p1(), p2(), 3]).then((value) => {
  console.log(value);
});
