const people = [
  { name: 'Виктор', age: 30, budget: 50000 },
  { name: 'Мария', age: 31, budget: 70000 },
  { name: 'Валентин', age: 40, budget: 100000 },
  { name: 'Мария', age: 32, budget: 100000 },
  { name: 'Татьяна', age: 28, budget: 50000 },
]

// ES5
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// ES6
// for (let person of people) {
//   console.log(person)
// }

// ForEach 

// 1 способ записи
// people.forEach(function (person) {
//   console.log(person)
// })

// 2 способ записи
// people.forEach(person => console.log(person))

// Map (можно веруть новый массив)

// const newPeople = people.map(person => `${person.name} (${person.age}) `)
// console.log(newPeople)

// Filter

// const adults = []
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age > 30) {
//     adults.push(people[i])
//   }
// }
// console.log(adults)

// const adults = people.filter(person => person.age > 30)
// console.log(adults)

// Reduce (если нужно получить конечное значение соверщив итерацию по массиву)

// let amount = 0
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget
// }
// console.log(amount)

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

// Find

// const maria = people.find((person => person.name === 'Мария') )
// console.log(maria)

// FindIndex

// const mariaIndex = people.findIndex((person => person.name === 'Мария') )
// console.log(mariaIndex)

// ==== Совместное использование

const amount = people
.filter(person => person.budget > 70000)
.map(person => {
  return {
    info: `${person.name} (${person.age})`,
    budget: Math.pow(person.budget, 0.5)
  }
})
.reduce((total, person) => total + person.budget, 0)

console.log(amount)