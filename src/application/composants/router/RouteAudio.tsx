import axios from "axios";

export const audio = (sleepSound: string ) => {
    axios.post('http://localhost:3000/login', {sleepSound: sleepSound})
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log("ERROR =>", error)
    })
}