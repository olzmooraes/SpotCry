import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";
import { getTokenData } from "./getTokenData";

export const getPlaylistByUser = () => {
    const token = localStorage.getItem("token")
    const userId = getTokenData(token).id
    return axios.get(`${BASE_URL}playlist/user/${userId}/playlists`, {
        headers: {
            Authorization: token,
        },
    })
}
