import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToDetailPage } from "../routes/Coordinator";


export const addPlaylist = (playlist, navigate) => {
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
            alert("Playlist criada");
        })
    } catch (e) {
        alert("error")
    }
}