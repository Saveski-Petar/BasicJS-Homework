console.log('Hellow')

// homework 1
const allHeadingsOne = document.querySelectorAll('h1')
console.log(allHeadingsOne)
//
const allParagraphs = document.querySelectorAll('p')
console.log(allParagraphs)
//
const allHeadingThree = document.querySelectorAll('h3')
console.log(allHeadingThree)
//
const textTag = document.getElementsByTagName('text')
console.log(textTag)

// we can change it like this
// allHeadingsOne[0].textContent = 'Hello'
// allHeadingsOne[1].textContent = 'Hello'
//
// allParagraphs[0].innerHTML = 'This is changed'
// allParagraphs[1].innerHTML = 'and this'
//
allHeadingThree[0].textContent = 'changed'
//
// textTag[0].textContent = 'YEP'

// or we can change this with a loop
for (let i = 0; i < allHeadingsOne.length; i++) {
  allHeadingsOne[i].innerHTML = 'This is changed with a loop'
}

for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].innerHTML = 'This is also changed with a loop'
}
