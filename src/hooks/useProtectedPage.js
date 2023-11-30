import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { goToLoginPage } from "../routes/Coordinator";
import Cookies from "js-cookie";

export const useProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() =>{
        const token = Cookies.get('token')
        if(token === undefined){
            goToLoginPage(navigate)
            return false
        }
    }, [])
}