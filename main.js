const baseURL = 'https://ghibliapi.herokuapp.com'
const peopleURL = '/people'

// selectors | elements
const body = document.querySelector('body')
const header = document.createElement('header')
const headerImg = document.createElement('img')
const headerH1 = document.createElement('h1')

// classes
headerImg.classList.add('header')
headerImg.classList.add('image')
headerH1.classList.add('header')
headerH1.classList.add('h1')
header.classList.add('center')


// appends
body.append(header)
header.append(headerImg)
header.append(headerH1)

// attributes 
headerImg.src = 'assets/emojilaugh-emoji.gif'
headerH1.textContent = 'Random People App'

fetch(`${baseURL}${peopleURL}`)
    .then((res) => res.json())
    .then((res) => {
        people = res
        console.log(`Response:`,res,'End of Response')
     })

