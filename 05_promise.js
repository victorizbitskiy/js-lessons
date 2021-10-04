// Callback

console.log('Reauest data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData);
//   }, 2000)
// }, 2000)

// Promise - обертка над асинхронностью

// const p = new Promise(function (resolve, reject) { // resolve, reject - это функциии
//   setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData) // говорим промису, что он завершил свое выполнение
//   }, 2000)
// })

// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//       // reject(data)
//     }, 2000)
//   })
// })
// .then(clientData => {
//   clientData.fromPromise = true
//   return clientData
// }).then(data => {
//   console.log('Modified', data);
// })
// .catch(err => console.error('Error', err))
// .finally(() => console.log('Finaly'))

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

// Применение:
// 1 
// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(5000).then(() => console.log('After 5 sec'))

// 2 
// Вместо sleep это могут быть запросы к серверу,
// когда, например, необходимо подождать набор данных их разных эндпойнтов
Promise.all([sleep(2000), sleep(5000)])
  .then(() => {
  console.log('All promises') // выполнится после всех переданных в массиве промисов
})

// 3 
Promise.race([sleep(5000), sleep(2000)])
  .then(() => {
  console.log('Race promises') // выполнится сразу после того, как выполнится первый завершенный промис 
})
