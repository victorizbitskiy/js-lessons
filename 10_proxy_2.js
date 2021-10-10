// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  })
}

// Применение
const position = withDefaultValue({
  x: 24,
  y: 42
},
  0
)

console.log(position)

// Hidden properties 
const withHiddenprops = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0      // receiver - это прокси, который мы возвращаем/ void 0 для возвращения undefined
  })
}

const data = withHiddenprops({
  name: 'Victor',
  age: 30,
  _uid: '12345'
})

// Optimization

const userData = [
  { id: 11, name: 'Victor', job: 'Backend', age: 30 },
  { id: 22, name: 'Mary', job: 'Frontend', age: 31 },
  { id: 33, name: 'Vladilen', job: 'Fullstack', age: 23 },
  { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 },
]

const IndexArray = new Proxy(Array, {
  construct(target, [args]) {
    // console.log(args);
    const index = {}     // карта всего массива
    args.forEach(item => (index[item.id] = item));
    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push': return item => {
            index[item.id] = item
            arr[prop].call(arr, item)
          }
          case 'findById': return id => index[id]
          default: return arr[prop]
        }
      }
    })
  }
})


const users = new IndexArray(userData)
users.push({ id: 55, name: 'Sergey' })
users.findById(55)