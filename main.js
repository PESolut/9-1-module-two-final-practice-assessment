const baseURL = 'https://ghibliapi.herokuapp.com'
const peopleURL = '/people'

// selectors
const body = document.querySelector('body')

fetch(`${baseURL}${peopleURL}`)
    .then((res) => res.json())
    .then((res) => {
        people = res
        console.log(`Response:`,res,'End of Response')
     })

