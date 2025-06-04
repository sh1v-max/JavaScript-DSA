function promiseRace(promises) {
  // Your implementation
  return new Promise((resolve, reject) => { 
      for (const item of promises) {
          Promise.resolve(item).then(resolve, reject)
      }
  })
}

//For the purpose of user debugging.
//pass appropriate input in below function call.
promiseRace();
module.exports = promiseRace