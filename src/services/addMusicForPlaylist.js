import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const addMusicForPLaylist = (playlist, music) => {
    const token = localStorage.getItem("token")
    axios.post(`${BASE_URL}/playlist/${playlist}/song/${music}`,  {
        headers: {
            Authorization: token
        }, body: {
            "songId": music
        }
    })
}