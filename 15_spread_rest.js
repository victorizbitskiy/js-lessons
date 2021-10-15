const citiesRussia = ['Москва', 'Санкт-Петербург', 'Белгород', 'Новосибирск', 'Казань']
const citiesEurope = ['Брлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Belgorod: 1,
  Novosibirsk: 3,
  Kazan: 5
}

const citiesEuropeWithPopulation = {
  Berlin: 10,
  Praha: 3,
  Paris: 2
}

// // Spread с массивами
// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesRussia] // клонирование массива
// const allCities = [...citiesRussia, ...citiesEurope] // объединение массивов
// const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope] // добавление нового элемента объединение массивов
// // Для сравнения раньше это можно было сделать так:
// const allCities = citiesEurope.concat(citiesRussia)


// Spread также позволяет работать с объектами

// console.log(...citiesRussiaWithPopulation) // будет ошибка
// console.log({ ...citiesRussiaWithPopulation }) // клонирование объекта

// Cоздаем новый объект.
// Если ключи есть в обоих объектах, то в результирующем будет ключ из последнего объекта
// console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation })

// Practice
// Найдем максимальное число
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))

// console.log(Math.max(...numbers))
// // Раньше нужно было так:
// // console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div') // divs это коллекция NodeList
// const nodes = [...divs]
// console.log(nodes, Array.isArray(nodes))  // true, т.к. nodes это уже массив

// // Rest оператор (остаток)
// function sum(a, b) {
//   return a + b
// }

// const numbers = [1, 2, 3, 4, 5]

// // Spread!
// console.log(sum(...numbers)) // <- 3


function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5]

// console.log(sum(...numbers)) // <- 15

// const a = numbers[0]
// const b = numbers[1]

// console.log(a, b) // <- 1 2

// Можно записать так:

const [a, b, ...other] = numbers
console.log(a, b, other) // <- 1 2 3 4 5

// 

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia'
}

const {name, age, ... address} = person
console.log(name, age, address)






