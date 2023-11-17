import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";

export const login = (body, navigate) => {
  localStorage.setItem("loading", true);
  console.log(body);
  axios
    .post(`${BASE_URL}user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loading", false);
      goToFeed(navigate)
    })
    .catch((err) => {
      console.log(err);      
      alert(err.response.data.error);
    });
};
