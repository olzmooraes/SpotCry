import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoHeader.png";
import {
  HeaderContainer,
  ButtonsContainer,
  Button,
  HeaderLogo,
} from "./Styles";
import { goToLoginPage, goToPlaylistByUser } from "../../routes/Coordinator";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const Header = () => {
  const [token, setToken] = useState(Cookies.get('token'))
  const navigate = useNavigate();
  const login = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };
  useEffect(()=>{
    setToken(Cookies.get('token'))
  }, [])
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="logo" />
      {
        token && (
          <ButtonsContainer>
            <Button onClick={()=>{goToPlaylistByUser(navigate)}}>Minhas playlists</Button>
            <Button >Minhas músicas</Button>
          </ButtonsContainer>
        ) || (
          <ButtonsContainer>
            <Button>Inscrever</Button>
            <Button onClick={login}>Entrar</Button>
          </ButtonsContainer>
        )
      }
    </HeaderContainer>
  );
};
