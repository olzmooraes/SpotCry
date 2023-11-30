import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const addMusicForPLaylist = (playlist, music) => {
    const token = localStorage.getItem("token")
    try {
        axios.post(`${BASE_URL}playlist/${playlist}/song`,{ "songId": `${music}`},
            {headers: { Authorization: token }, }
        ).then((response) =>{
            alert("PLaylist added successfully")
            console.log(response)
        })  
    } catch (e) {
        alert("error")
    }
}