const url = 'https://candidate-test.herokuapp.com/contacts'
export const fetchData = () => fetch(url)
    .then(res => res.json())