import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const addPlaylist = (playlist) => {
    const token = localStorage.getItem("token")
    try {
        axios.post(`${BASE_URL}playlist`,{ 
            "userId": `${playlist.id}`,
            "songs": [],
            "description": `${playlist.description}`,
            "name": `${playlist.name}`
        },
            {headers: { Authorization: token }, }
        ).then(() =>{
            return false
        })
    } catch (e) {
        alert("error")
    }
}