import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const deletePlaylist = (id)=>{
    const token = localStorage.getItem("token")
        axios.delete(`${BASE_URL}playlist/${id}`, {
            headers: {
                Authorization: token
            }
        }).then((response)=>{
            alert("Playlist deleted successfully")
            console.log(response)
        }).catch((e)=>{
        alert("Error deleting playlist")
        console.log(e)
    })
}