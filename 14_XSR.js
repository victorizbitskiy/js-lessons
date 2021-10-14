const requestURL = 'https://jsonplaceholder.typicode.com/users' // фейк онлайн REST api

const xsr = new XMLHttpRequest()
xsr.open('GET', requestURL)

// Сначала определим слушателя, а потом вызовем send() 
// xsr.onload = () => {
//   // console.log(xsr.response) // возвращает строку.
//   // console.log(JSON.parse(xsr.response)) // возвращает массив объектов
// }

// или так:

// xsr.responseType = 'json'

// xsr.onload = () => {
//   if (xsr.status >= 400) {
//     console.error(xsr.response)
//   }
//   console.log(xsr.response)
// }

// xsr.onerror = () => {
//   console.log(xsr.response)
// }

// xsr.send()

// Добавим промисы

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xsr = new XMLHttpRequest()
    xsr.open(method, url)

    xsr.responseType = 'json'
    xsr.setRequestHeader('Content-Type', 'application/json')
    xsr.onload = () => {
      if (xsr.status >= 400) {
        reject(xsr.response)
      }
      resolve(xsr.response)
    }

    xsr.onerror = () => {
      reject(xsr.response)
    }

    xsr.send(JSON.stringify(body))
  })
}

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const body = {
  name: 'Victor', 
  age: 30
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))
