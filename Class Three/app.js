console.log('Hello')

// Exercise #1 from class
function sumNumbers(numONe, numTwo) {
  const result = numONe + numTwo
  return result
}
function subtractsNumbers(numONe, numTwo) {
  const result = numONe - numTwo
  return result
}
function multiplyNumbers(numONe, numTwo) {
  const result = numONe * numTwo
  return result
}
function divideNumbers(numONe, numTwo) {
  const result = numONe / numTwo
  return result
}
console.log(sumNumbers(5, 5))
console.log(subtractsNumbers(5, 4))
console.log(multiplyNumbers(5, 4))
console.log(divideNumbers(8, 2))

// Exercise #2 from class
function CelsiustoFahrenheit(celsius) {
  let convert = celsius * 1.8 + 32
  return convert
}
function FahrenheittoCelsius(Fahrenheit) {
  let convert = (5 / 9) * (Fahrenheit - 32)
  return convert
}

let personChoice = prompt('Enter F for farenheit and C for celsius')
let personInput = parseInt(prompt('Please enter value:'))
if (personChoice === 'F') {
  result = `${CelsiustoFahrenheit(personInput)}C`
} else if (personChoice === 'C') {
  result = `${FahrenheittoCelsius(personInput)}F`
} else {
  result = 'ERROR!'
}
alert(result)

// Exercise #3 from class
const currentYear = new Date().getFullYear()
function calculateAge(birthYear) {
  let calc = currentYear - birthYear
  console.log(`you are ${calc} years old`)
}
calculateAge(2002)
calculateAge(2005)
calculateAge(1998)

// Homeword From Class #3
console.log('Homework #1')
function returnType(value) {
  return typeof value
}
console.log(returnType(123))
console.log(returnType(false))
console.log(returnType('HEllouuu'))
console.log(returnType([1, 2, 3, 4, 'jack', 'johhny']))
console.log(returnType())

// Homewerk 2
console.log('Homework #2')
function calculateDogAge(age) {
  const dogYears = 7 * age
  console.log('Your dog is ' + dogYears + ' years old in dog years!')
}
calculateDogAge(8)

// homework 3
console.log('Homework #3')
// let balance = 50000
// let amount = prompt('Please enter the amount you want to withdraw:')

// function withdraw(accmoney, withdrawal) {
//   if (withdrawal > accmoney) {
//     return alert('Not enough money on the account.')
//   } else if (withdrawal <= accmoney) {
//     let sub = accmoney - withdrawal
//     return alert(
//       `You have withdrawn ${withdrawal}, your current balance is ${sub}`
//     )
//   }
// }

// withdraw(balance, amount)
