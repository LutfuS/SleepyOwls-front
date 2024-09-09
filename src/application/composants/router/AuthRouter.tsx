import axios from "axios"

// axios.get('mongodb://localhost:27017')
// .then(response => {
//     console.log(response.data)
// })
// .catch(error => {
//     console.error("Il y'a eu un porblème avec la requête:", error)
// });


export const addOneUser = (email: string, password: string) => {
    axios.post('http://localhost:3001/user', {email: email, password: password})
    .then(response => {
    console.log(response.data)
    })
    .catch(error => {
        console.error("Il y'a eu un problème avec la requête:", error)
    })
}

export const login = (email: string, password: string) => {
    axios.post('http://localhost:3001/login', {email: email, password: password})
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log("ERROR =>", error)
    })
}



export const logout = () => {
    axios.post('http://localhost:3000/logout')
    .then(response => {
        console.log("Logout successful:", response.data);
     
        localStorage.removeItem("token"); 
       
        window.location.href = '/login'; 
    })
    .catch(error => {
        console.log("ERROR during logout =>", error);
    });
}

