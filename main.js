const baseURL = 'https://ghibliapi.herokuapp.com'
const peopleURL = '/people'

fetch(`${baseURL}${peopleURL}`)
    .then((res) => res.json())
    .then((res) => {
        people = res
        console.log(res)

     })

