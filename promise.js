// setTimeout alnernative with promise
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// What shows the code below?
// only first resolve, code below will be ignored
let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
  });

//   promise.then(alert);

//   then/catch
//   "catch" method catches an error of ".then(f1)" block
  promise.then(f1).catch(f2);
  promise.then(f1, f2);