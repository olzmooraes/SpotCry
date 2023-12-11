import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoHeader.png";
import search from "../../assets/search.png";
import {
  HeaderContainer,
  ButtonsContainer,
  Button,
  SearchContainer, 
  PesquiseInput,   
  SearchIcon,      
  SearchButton,    
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
  useEffect(() => {
    setToken(Cookies.get('token'))
  }, [])

  const SearchBar = () => {
    const performSearch = () => {
      // Adicione a lógica de pesquisa aqui
    }

    return (
      <SearchContainer>
        <PesquiseInput type="text" placeholder="Pesquisar..." />
        <SearchButton onClick={performSearch}>
          <SearchIcon src={search} alt="Ícone de Pesquisa" />
        </SearchButton>
      </SearchContainer>
    );
  };
  
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="logo" />
      {token ? (
        <ButtonsContainer>
          <SearchBar />
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <Button>Inscrever</Button>
          <Button onClick={login}>Entrar</Button>
        </ButtonsContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
