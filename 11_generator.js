// Генераторы - это некоторые функции, которые могут последовательно выдавать результат работы

// function* strGenerator() {
//   // yield - выдает результат порционно
//   yield 'H'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }

// const str = strGenerator()

// function* numberGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }

// const num = numberGen(5)

// Неитерируемыый объект
// const iterator = {
//   gen(n = 10) {
//     let i = 0

//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false }
//         }
//         return { value: undefined, done: true }
//       }
//     }
//   }
// }

// // Будет ошибка т.к. у iterator нет Symbol
// for (let k of iterator) {
//   console.log(k)
// }

// // Теперь ошибки не будет
// const iterator = {
//    [Symbol.iterator](n = 10) {
//     let i = 0

//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false }
//         }
//         return { value: undefined, done: true }
//       }
//     }
//   }
// }

// for (let k of iterator) {
//   console.log(k)
// }

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

for (let k of iter(6)) {
  console.log(k)
}
