import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";
import { getTokenData } from "./getTokenData";

export const getMusicFromPlaylist = () => {
    const token = localStorage.getItem("token")
    const userId = getTokenData(token).id
    // .get(`${BASE_URL}user/${userId}/playlists`, {
        return axios.get(`${BASE_URL}playlist/:id/song`, {
            headers: {
                Authorization: token,
            },
        });
};
