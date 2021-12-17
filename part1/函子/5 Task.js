const fs = require('fs');
const { task } = require('folktale/concurrency/task');

function readFile(fileName) {
  return task((resolver) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        resolver.reject(err);
      }
      resolver.resolve(data);
    });
  });
}

readFile('1 MayBe.js')
  .run()
  .listen({
    onRejected: (err) => {
      console.log(err, 'err');
    },
    onResolved: (value) => {
      console.log(value);
    },
  });

// class Task{
//     static of(value){
//         return new Task(value)
//     }
//     constructor(value){
//         this._value=value
//     }
//     map(fn){
//         return Task.of(fn(this._value))
//     }
// }
