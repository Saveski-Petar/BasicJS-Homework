console.log('Hello')

// Exercise #1 from class
console.log('Exercise #1')
// const input = prompt('How much money you have?')
// let cash = 100000
// if (input === null || input === '') {
//   text = 'No input is provided'
// } else if (input > cash) {
//   text = 'Nice Dude, go on a awesome trip around europe.'
// } else if (input == cash) {
//   text = 'Invest the money!!'
// } else {
//   text = 'GO to work dude like cmon you need more money!!!!'
// }
// alert(text)

// Class #2 Homework
console.log('Homework')

//  rat = 0
//  ox = 1
//  tiger = 2
//  rabbit = 3
//  dragon = 4
//  snake = 5
//  horse = 6
//  goat = 7
//  monkey = 8
//  rooster = 9
//  dog = 10
//  pig = 11

const year = prompt('What is your year when you were born?')
const calcAge = (year - 4) % 12
console.log(calcAge)
if (calcAge == 0) {
  result = `Your Chinese Zodiac sign is: Rat`
} else if (calcAge == 1) {
  result = `Your Chinese Zodiac sign is: Ox`
} else if (calcAge == 2) {
  result = `Your Chinese Zodiac sign is: Tiger`
} else if (calcAge == 3) {
  result = `Your Chinese Zodiac sign is: Rabbit`
} else if (calcAge == 4) {
  result = `Your Chinese Zodiac sign is: Dragon`
} else if (calcAge == 5) {
  result = `Your Chinese Zodiac sign is: Snake`
} else if (calcAge == 6) {
  result = `Your Chinese Zodiac sign is: Horse`
} else if (calcAge == 7) {
  result = `Your Chinese Zodiac sign is: Goat`
} else if (calcAge == 8) {
  result = `Your Chinese Zodiac sign is: Monkey`
} else if (calcAge == 9) {
  result = `Your Chinese Zodiac sign is: Rooster`
} else if (calcAge == 10) {
  result = `Your Chinese Zodiac sign is: Dog`
} else if (calcAge == 11) {
  result = `Your Chinese Zodiac sign is: Pig`
} else {
  result = 'you did not enter valid value'
}
alert(result)
