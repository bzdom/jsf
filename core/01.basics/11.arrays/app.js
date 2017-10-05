const emptyArray = []
const notEmptyArray = ["Moe", "Curly", "Larry"]

const people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Napolean Bonaparte',
  'Abraham Lincoln',
  'Mother Theresa',
  'Mahatma Gandhi',
  'Winston Churchill',
  'Charles Darwin',
  'Albert Einstein',
  'Pablo Picasso',
  'Ludwig Beethoven',
  'Walt Disney',
  'Henry Ford',
  'Steve Jobs'
]

console.log(people.indexOf('Mahatma Gandhi'))
const picasso = people[people.indexOf('Pablo Picasso')]
people[people.indexOf('Walt Disney')] = 'Disneyland'
const peopleTwo = people.concat('Ella Levy')
console.log(peopleTwo)
const friendToAdd = 'Peleg Rabinovich'
const anotherFriend = [friendToAdd]
const peopleThree = anotherFriend.concat(peopleTwo)
console.log(peopleThree)
const peopleStart = peopleThree.slice(0,9)
const peopleEnd = peopleThree.slice(9)
const myName = 'Shahar Levy'
const meToAdd = [myName]
const peopleFour = [].concat(peopleStart, meToAdd , peopleEnd)
console.log(peopleFour)
const peopleFive = [].concat(peopleFour.slice(0, 1), peopleFour.slice(2))
console.log(peopleFive)
const peopleSix = [].concat(peopleFive.slice(0, 15), peopleFive.slice(16))
console.log(peopleSix)
const peopleSeven = [].concat(peopleSix.slice(0, peopleSix.indexOf('Napolean Bonaparte')), peopleSix.slice(peopleSix.indexOf('Napolean Bonaparte')+1))
console.log(peopleSeven)
