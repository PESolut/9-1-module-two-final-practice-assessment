const baseURL = 'https://ghibliapi.herokuapp.com'
const peopleURL = '/people'

// selectors | elements
const body = document.querySelector('body')
const header = document.createElement('header')
const headerImg = document.createElement('img')
const headerH1 = document.createElement('h1')
const main = document.createElement('main')
const mainSec1 = document.createElement('section')
const mainSec2 = document.createElement('section')
const mainSec3 = document.createElement('section')
const mainSec4 = document.createElement('section')
const mainSec1H2 = document.createElement('h2')
const mainSec1Select = document.createElement('select')
const mainSec1Hr = document.createElement('hr')
const mainSec2H4 = document.createElement('h4')
const mainSec2Form = document.createElement('form')

// classes
headerImg.classList.add('header')
headerImg.classList.add('image')
headerH1.classList.add('header')
headerH1.classList.add('h1')
header.classList.add('center')
mainSec1Hr.classList.add('center')
mainSec2H4.classList.add('itallic')

// appends
body.append(header)
header.append(headerImg)
header.append(headerH1)
body.append(main)
main.append(mainSec1)
mainSec1.append(mainSec1H2)
mainSec1.append(mainSec1Select)
mainSec1.append(mainSec1Hr)
main.append(mainSec2)
mainSec2.append(mainSec2H4)
mainSec2.append(mainSec2Form)
main.append(mainSec3)
main.append(mainSec4)


// attributes 
headerImg.src = 'assets/emojilaugh-emoji.gif'
headerH1.textContent = 'Random People App'
mainSec1H2.textContent =  'Select Person'
mainSec2H4.textContent = 'Add a Shoutout'


fetch(`${baseURL}${peopleURL}`)
    .then((res) => res.json())
    .then((res) => {
        people = res
        console.log(`Response:`,res,'End of Response')
     })

