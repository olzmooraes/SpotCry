import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const deleteTrackPlaylist = (idPlaylist, idTrack)=>{
    const token = localStorage.getItem("token")
        axios.delete(`${BASE_URL}playlist/${idPlaylist}/song/${idTrack}`, {
            headers: {
                Authorization: token
            }
        }).then((response)=>{
            alert("Track deleted successfully")
            console.log(response)
        }).catch((e)=>{
        alert("Error deleting track")
        console.log(e)
    })
}