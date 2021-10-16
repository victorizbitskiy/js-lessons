// function calcValues(a, b) {
//   return [
//     a + b,
//     a - b,
//     a * b,
//     a / b
//   ]
// }

// const result = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]

// Деструктуризация массивов
// const [sum,, mult, ...other] = calcValues(42, 10)
// console.log(sum, mult, other) // <- 52 420 [4.2]

// function calcValues(a, b) {
//   return [
//     a + b,
//     undefined,
//     a * b,
//     a / b
//   ]
// }

// const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10)
// console.log(sum, mult, other) // <- 52 420 [4.2] "Вычитания нет"

// Деструктуризация объектов

const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow'
  }
}

// 1)
// const name = person.name
// const { name } = person // <- Max

// const {
//   name: firstName = 'Без имени',
//   age,
//   car = 'Машины нет',
//   address: { city: homeTown, country }
// } = person
// console.log(firstName, age, car, homeTown, country)

// 2)
// const {name, ...info} = person
// console.log(name, info)

// Применение
// function logPerson(per) {
//   console.log(per.name + ' ' + per.age)
// }

// Можно так:

function logPerson({name: firstName = 'Mad', age}) {
  console.log(firstName + ' ' + age)
}

logPerson(person)