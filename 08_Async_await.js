const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// Promise

// function fetchTodos() {
//   console.log('Fetch todo started...');
//   return delay(2000)
//     .then(() => fetch(url))                   // fetch - нативная функция браузера. Аналог Ajax 
//     .then(response => response.json())
// }

// fetchTodos()
//   .then(data => {
//     console.log('Data:', data);
//   })
//   .catch(e => console.error(e))

// Async await

async function fetchAsyncTodos() {
  console.log('Fetch todo started...');
  await delay(2000) // равносильно выполнению промиса
  const response = await fetch(url)
  const data = await response.json()
  console.log('Data:', data);
}

fetchAsyncTodos()
