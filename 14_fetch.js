// Метод fetch() поддерживается не всеми браузерами

const requestURL = 'https://jsonplaceholder.typicode.com/users' // фейк онлайн REST api
const headers = {
  'Content-Type': 'application/json'
}

function sendRequest(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })

  })
}

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .cath(err => console.log(err))

const body = {
  name: 'Victor',
  age: 30
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))
