console.log('Hello')

// Exercise from class Lenght in meters
let LenghtInFeet = 500
const OneFeetInMeters = 0.3048
let Result = LenghtInFeet * OneFeetInMeters
console.log(Result)

// Calculate area of rectangle
let sideA = 20
let sideB = 40
let area = sideA * sideB
console.log(area)

// Calculate area of circle
let radius = 80
let pi = Math.PI
let ResultCircle = pi * (radius * radius)
console.log(ResultCircle)

// Class One Homework!!!
let Phones = 30
let OnePhonePrice = 119.95
let TaxRate = 5
let cartPrice = Phones * OnePhonePrice
let taxDue = (TaxRate / 100) * cartPrice
let resultHomework = taxDue + cartPrice
console.log('The Price of the 30 phones is: $' + resultHomework)
