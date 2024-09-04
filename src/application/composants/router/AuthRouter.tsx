import axios from "axios"

// axios.get('mongodb://localhost:27017')
// .then(response => {
//     console.log(response.data)
// })
// .catch(error => {
//     console.error("Il y'a eu un porblème avec la requête:", error)
// });


export const addOneUser = (email: string, password: string) => {
    axios.post('http://localhost:3000/user', {email: email, password: password})
    .then(response => {
    console.log(response.data)
    })
    .catch(error => {
        console.error("Il y'a eu un problème avec la requête:", error)
    })
}

export const login = (email: string, password: string) => {
    axios.post('http://localhost:3000/login', {email: email, password: password})
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log("ERROR =>", error)
    })
}


