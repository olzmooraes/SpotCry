import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { getTokenData } from "./getTokenData";

export const getMusicsFromUser = () => {
    const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}song`, {
            headers: {
                Authorization: token,
            },
        });
};