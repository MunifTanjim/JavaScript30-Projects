// require('../stylesheets/style')

console.group('Strings, Numbers & Booleans')
// start with strings, numbers and booleans
let str1 = 'Hola'
let str2 = str1
console.log({str1,str2})
str1 = 'Aloha'
console.log({str1,str2})

let num1 = 27
let num2 = num1
console.log({num1,num2})
num1 = 42
console.log({num1,num2})

let bool1 = false
let bool2 = bool1
console.log({bool1,bool2})
bool1 = true
console.log({bool1,bool2})

console.groupEnd('Strings, Numbers & Booleans')

console.group('Arrays')
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
console.log('players',players)

// You might think we can just do something like this:
const team1 = players
console.log('team1',team1)

// however what happens when we update that array?
team1[3] = 'Choppy'

// now here is the problem!
console.log('team1',team1)

// oh no - we have edited the original array too!
console.log('players',players)

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
let team2 = Array.from(players)
console.log('team2',team2)

// one day
let team3 = players.slice()
console.log('team3',team3)

// or create a new array and concat the old one in
let team4 = [].concat(players)
console.log('team4',team4)

// or use the new ES6 Spread
let team5 = [...players]
console.log('team5',team5)

// now when we update it, the original one isn't changed
team5[3] = 'Roppy'
console.log('team5',team5)
console.log('players',players)

console.groupEnd('Arrays')

console.group('Objects')
// The same thing goes for objects, let's say we have a person object
const person = {
  name: 'Hannibal Lecter',
  food: {
    one: 'Bovine',
    two: 'Non-Veg'
  }
}

// with Objects
console.log('person',person)

// and think we make a copy:
const doctor = person
console.log('doctor',doctor)
doctor.age = 32
console.log('doctor',doctor)
console.log('person',person)

// how do we take a copy instead?
const hannibal = Object.assign({}, person, {age:42, is: 'Cannibal'})
console.log('hannibal',hannibal)
console.log('person',person)


// We will hopefully soon see the object ...spread
// const lecter = {...person} // 😕

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const me = {
  name: 'Munif',
  social: {
    facebook: 'MunifTanjim',
    twitter: '@MunifTanjim'
  }
}

console.log('me', me)
const munif = Object.assign({}, me)
console.log('munif', munif)
munif.name = 'Munif Tanjim'
console.log('munif.name ->', munif.name)
console.log('me.name ->', me.name)

munif.social.site = 'muniftanjim.com'
console.log('munif.social ->', munif.social)
console.log('me.social ->', me.social)

// Poor man's object copy
const meString = JSON.stringify(me)
console.log('meString ->', meString)
const tanjim = JSON.parse(meString)
console.log('tanjim', tanjim)

console.groupEnd('Objects')
