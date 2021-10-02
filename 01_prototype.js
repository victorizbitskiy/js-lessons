const person = new Object({
  name: 'Ivan',
  age: 30,
  greet: function() {
    console.log('Greet!')
  }
})

Object.prototype.sayHallo = function() {
  console.log('Hello!')
}

// Делаем person прототипом 
const masha = Object.create(person) 
masha.name = 'Mary'

// const str = `I'll be back `
const str = new String(`I'll be back `)
