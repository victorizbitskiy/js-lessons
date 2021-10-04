console.log('Start 1') // будет выполнен синхронно

setTimeout(function() {
  console.log('Inside timeout, after 5 seconds') // будет выполнен асинхронно
}, 5000)

console.log('Start 2') // будет выполнен синхронно

// Event loop example
// http://latentflip.com/loupe
