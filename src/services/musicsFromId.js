import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { getTokenData } from "./getTokenData";

export const getMusicsFromId = (id) => {
    const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}song/${id}`, {
            headers: {
                Authorization: token,
            },
        });
};