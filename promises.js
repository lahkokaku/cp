const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('3 sec')
  }, 3000)
  setTimeout(() => {
    reject('2 sec')
  }, 2000)
})

promise.then(
  (message) => console.log(message),
  (message) => console.log(message)
)