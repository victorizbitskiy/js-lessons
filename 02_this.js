function hello() {
  console.log('Hello', this);
}

const person = {
  name: 'Victor',
  age: 30,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

const masha = {
  name: 'Mary',
  age: 31
}

// person.logInfo.bind(masha, 'Frontend', '8-999-123-12-23')() // bind возвращает функцию
// person.logInfo.call(masha, 'Frontend', '8-999-123-12-23') //  call сразу вызывает функицю
// person.logInfo.apply(masha, ['Frontend', '8-999-123-12-23']) //  в apply передается только 2 параметра: контекст и массив

// Еще пример

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//   return arr.map(function(i){
//     return i * n
//   })
// }

// console.log(multBy(array, 5));

// Добавляем метод в прототип

Array.prototype.multBy = function(n){
    return this.map(function(i){
    return i * n
  })
}

console.log(array.multBy(2))
