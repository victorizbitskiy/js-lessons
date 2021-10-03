// Замыкания - функция внутри функции
// function createCalcFunction() {
//   return function() {
//     console.log(1000 * n) // n - замкнуто
//   }
// }

// const calc = createCalcFunction(42) // calc - это функция

// calc() // >> 42000



// createIncrementor(n) {
//   return function(num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(1) // замыкаем 1
// const addTen = createIncrementor(10) // замыкаем 10

// console.log(addOne(10)) // >> 11
// console.log(addOne(41)) // >> 42

// console.log(addTen(10)) // >> 20
// console.log(addTen(41)) // >> 51



// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(comUrl('github'));
// console.log(ruUrl('yandex'));

const person1 = { name: 'Edward', age: 30, job: 'Teacher' }
const person2 = { name: 'Olga', age: 30, job: 'Teacher' }

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

// function bind(context, fn) {
//   fn.bind(context)()
// }

// bind(person1, logPerson)
// bind(person2, logPerson)


function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

bind(person1, logPerson)()
bind(person2, logPerson)()




