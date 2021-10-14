// Объект
// const obj = {
//   name: 'Victor',
//   age: 30,
//   job: 'Fullstask'
// }

// Массив
// const entries = [
//   ['name', 'Victor'],
//   ['age', 30],
//   ['job', 'Fullstask'],
// ]

// // Из объекта в массив
// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

// Map (по функционалу схож с обычными объектами js, но в качестве ключей можно указывать любые типы данных)

// const map = new Map(entries)

// map
//   .set('newField', 42)
//   .set({ obj }, 'ValueOfObject')
//   .set(NaN, 'NaN sd')

// console.log(map.get(NaN))
// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)


// ====

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// for (let val of map.values()) {
//   console.log(val)
// }

// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach((val, key, m) => console.log(val, key))

// ====
// Создание массива из карты

// const array = [...map]
// const array = Array.from(map)
// console.log(array)

// Можно сделать объект их карты

// const mapObj = Object.fromEntries(map.entries())

// Если ключем является объект, то он выведется как [object Object]

// // {name: 'Victor', age: 30, job: 'Fullstask', newField: 42, [object Object]: 'ValueOfObject', …}
// console.log(mapObj)

// ====

// Для каждого пользователя запишем время когда он посещал сайт или просматривал статью
// const users = [
//   { name: 'Pavel' },
//   { name: 'Alex' },
//   { name: 'Irina' },
// ]

// const visits = new Map()

// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// function lastVisit(user) {
//   return visits.get(user)
// }

// console.log(lastVisit(users[2]))

// Set (значения хранятся в единичном экземпляре)

// const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 7])

// set
//   .add(10)
//   .add(20)
//   .add(30)
//   .add(20)

// console.log(set)
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.clear())

// console.log(set)

// console.log(set.keys())
// console.log(set.entries())

// for (const key of set) {
//   console.log(key);
// }

// ==== Необходимо написать функцию, которая будет возвращать уникальные значения из массива
// function uniqValues(array) {
//   // return [...new Set(array)]
//   return Array.from(new Set(array))
// }

// console.log(uniqValues([1, 1, 4, 4, 5]))


// WeakMap (Позволяет избгать утечек пямяти в JS)

// let obj = { name: 'weakmap' }
// const arr = [obj]
// obj = null

// console.log(arr[0])  // <- {name: 'weakmap'} объект остался в памяти
// В мap'е ключами могут быть объекты. Если мы удалим ссылку на этот объект, то мы не сможем получить доступ к значению оп ключу
// Т.е. у нас будут лишние данные. Чтобы этого избежать есть WeakMap
// У WeakMap ключами могут быть только объекты

// const map = new WeakMap([
//   [obj, 'obj data']
// ])
// // get, set, delete, has

// obj = null

// console.log(map.has(obj)) // <- false ключ и значение удалилось 
// console.log(map.get(obj)) // <- undefined 
// Размер WeakMap нельзя получить, т.к. ключ может быть удален в любое время и подсчитать количество нельзя

// Использование
// const cache = new WeakMap()

// function cacheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now())
//   }
//   return cache.get(user)
// // }

// // let lena = {name: 'Elena'}
// // let alex = {name: 'Alex'}

// // cacheUser(lena)
// // cacheUser(alex)

// // lena = null

// console.log(cache.has(lena))
// console.log(cache.has(alex))

// ====
// WeakSet (только объекты, если объект удален сборщиком мусора, то он также будет удален из WeakSet)

const users = [
  { name: 'Pavel' },
  { name: 'Alex' },
  { name: 'Irina' },
]

const visits = new WeakSet()

visits
.add(users[0])
.add(users[1])

users.splice(1, 1)  
users.splice(1, 1)  // Удаляем элементы начиная с 1го и всего удаляем элементов 1

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))

