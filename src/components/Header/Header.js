import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoHeader.png";
import {
  HeaderContainer,
  ButtonsContainer,
  Button,
  HeaderLogo,
} from "./Styles";
import { goToLoginPage } from "../../routes/Coordinator";
import { useEffect, useState } from "react";
import { getTokenData } from "../../services/getTokenData";

export const Header = () => {
  const [token, setToken] = useState(getTokenData(localStorage.getItem("token")) )
  const navigate = useNavigate();
  const login = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };
  useEffect(()=>{
    setToken(localStorage.getItem("token"))
  }, [])
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="logo" />
      {
        token && (
          <ButtonsContainer>
            <Button>Minhas playlists</Button>
            <Button onClick={login}>Minhas músicas</Button>
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
