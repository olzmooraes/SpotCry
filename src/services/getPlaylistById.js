import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";
import { getTokenData } from "./getTokenData";

export const getPlaylistById = (id) => {
    const token = localStorage.getItem("token")
    return axios.get(`${BASE_URL}playlist/${id}`, {
        headers: {
            Authorization: token,
        },
    })
}
