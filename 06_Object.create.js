// Property descritor

// const person = Object.create({}, {
//   name: {
//     value: 'Victor',
//     enumerable: true,   // перечисляемое, можно делать итерации
//     writable: true,     // можно перезаписать 
//     configurable: true  // можно удалять ключ из объекта
//   },
//   birthYear: {
//     value: '1991',
//     // enumerable: false
//     // writable: false
//     // configurable: true 
//   }
// })

// person.name = 'Alex'
// delete person.name

// for (let key in person) {
//   console.log('Key', key, person[key]);
// }

// Getter and Setter

const person = Object.create(
  {
    calculateAge() {
      console.log('Age:', new Date().getFullYear() - this.birthYear)
    }
  },
  {
    name: {
      value: 'Victor',
      enumerable: true,   // перечисляемое, можно делать итерации
      writable: true,     // можно перезаписать 
      configurable: true  // можно удалять ключ из объекта
    },
    birthYear: {
      value: '1991',
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear // -> person.age  <- 30
      },
      set(value) { 
        // ?
      }
    }
  })

for (let key in person) { // бежит еще и по прототипу объекта, поэтому добавляем проверку
  if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key]);
  }
}

