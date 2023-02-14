console.log('Hellow')

// Student exercise one
function findNumber(number, array) {
  occurrences = 0
  for (i = 0; i < array.length; i++) {
    if (array[i] === number) {
      occurrences++
    }
  }
  return `There is ${occurrences} occurrences of number ${number} in the array.`
}

let arrayOfNumOne = [5, 5, 6, 7, 8, 4, 5, 6, 4, 2, 2, 3]
console.log(findNumber(5, arrayOfNumOne))
let arrayOfNumTwo = [1, 2, 1, 2, 3, 4, 5, 1, 1, 1, 5, 1]
console.log(findNumber(1, arrayOfNumTwo))
let arrayOfNumThree = [8, 5, 8, 5, 6, 7, 8, 2, 8, 6, 7, 8, 8, 8, 8, 1, 2, 3, 8]
console.log(findNumber(8, arrayOfNumThree))

// Student Exercise two
let oddOrEven = prompt(`For all even numbers to be displayed enter even,
or for all odd numbers enter odd.`)

function findOddEvenNumbers(array, type) {
  let result = []
  if (type === 'even') {
    for (i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        result.push(array[i])
      }
    }
    return `Even numbers are: ${result}`
  } else if (type === 'odd') {
    for (i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        result.push(array[i])
      }
    }
    return `Odd numbers are: ${result}`
  } else alert('Error! You need to enter odd or even!')
}
console.log(
  findOddEvenNumbers(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    oddOrEven
  )
)
// homework 2
function sumOfNumbers(arrayOfNum) {
  let i = 0
  let sum = 0

  while (i < arrayOfNum.length) {
    sum += arrayOfNum[i]
    i++
  }
  return `Sum of 5 numbers from an array is ${sum}`
}

console.log(sumOfNumbers([1, 1, 1, 1, 1]))

// homework 3
function bigString(array) {
  let i = 0
  let sum = ''

  while (i < array.length) {
    sum += array[i] + ' '
    i++
  }
  return sum
}

let arrayOfWords = ['Hello', 'Petar', 'How', 'are', 'you', 'today?']
console.log(bigString(arrayOfWords))

// Homework #4

let i = 1
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(`${i} is even number `)
  } else if (i % 2 !== 0) {
    console.log(`${i} is odd number. `)
  }
  i++
}

// Homework #5

function sumOfMaxAndMin(array) {
  for (i = 0; i < array.length; i++) {
    let minNumber = Math.min.apply(0, array)
    let maxNumber = Math.max.apply(0, array)
    let minAndMaxSum = minNumber + maxNumber
    return `Min number: ${minNumber}, Max number: ${maxNumber}, Sum: ${minAndMaxSum}`
  }
}
let minAndMaxArray = [10, 21, 8, 100, 25]
console.log(sumOfMaxAndMin(minAndMaxArray))

// Homework #6
console.log('*** Homework #6 ***')

firstName = ['Bob', 'John', 'Petar']
lastName = ['Bobski', 'Doe', 'Saveski']

function concatenateArrays(arrayFirst, arrayLast) {
  let fullName = []
  for (i = 0; i < arrayFirst.length; i++) {
    fullName.push(i + 1 + '.' + ' ' + arrayFirst[i] + ' ' + arrayLast[i])
  }
  return fullName
}
let arrayOfFullNames = [concatenateArrays(firstName, lastName)]
console.log(arrayOfFullNames)
