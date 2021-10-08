// Objects

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const person = {
  name: 'Victor',
  age: 25,
  job: 'Fullstack'
}

const op = new Proxy(person, {
  get(target, prop) {
    // console.log('Target', target)
    // console.log('Prop', prop)
    console.log(`Getting prop ${prop}`)
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },
  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('Deletiong ...', prop)
    delete target[prop]
    return true
  }
})