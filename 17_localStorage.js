const myNumber = 42
// localStorage.removeItem('number')
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const object = {
  name: 'Max',
  age: 20
}

// localStorage.setItem('person', object) // в value будет [object Object], т.к. у объекта вызовется toString()

// Запись объекта в localStorage
localStorage.setItem('person', JSON.stringify(object)) // в value будет строка в формате Json {"name":"Max","age":20}

const raw = localStorage.getItem('person')
// raw.name = 'Victor' // не сработает

// console.log(typeof raw) // string

// Нужно сделать так:
// console.log(JSON.parse(raw))

const person = JSON.parse(raw)
person.name = 'Victor'

console.log(person)
// ====

// Особенности работы с localStorage
// Если приложение открыто в разных вкладках, то можно это синхронизировать

// 1 способ синхронизации
// Событие происходит тогда, когда что-то записывается в localStorage на другой вкладке
window.addEventListener('storage', event => {
  console.log(event)
})

// 2 способ синхронизации
// window.onstorage = () => {}

// Часто задаваемый вопрос на собеседовании:
// Чем отличается localStorage от cookies?

// 1) localStorage намного больше. Обычно это около 5 Мб
// 2) cookies улетают на сервер. Это не безопасно.



