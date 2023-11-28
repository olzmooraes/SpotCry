import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";
import Cookies from "js-cookie";

export const login = (body, navigate) => {
  console.log(body);
  axios
    .post(`${BASE_URL}user/login`, body)
    .then((res) => {
      const token = res.data.token
      localStorage.setItem("token", token);
      Cookies.set("token", token, { expires: 1/24})
      goToFeed(navigate)
    })
    .catch((err) => {
      console.log(err);      
      alert(err.response.data.error);
    });
};

//  "email": "luiz@faminas.edu.br",
// "password": "a9e4i7o2"
