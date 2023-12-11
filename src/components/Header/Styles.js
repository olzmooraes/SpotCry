import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const HeaderLogo = styled.img`
    padding-right:50px;
    width: 10rem;
    margin-top: 30px;
    z-index:1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${COLORS.iceblue};
  top: 0;
  z-index: 1000;
  padding: 0 15%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: 30rem;
`;

export const Button = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${COLORS.purple};
  font-family: "Raleway", sans-serif;
  font-weight: 600;

  &:hover {
    color: ${COLORS.darkGray};
    background-color: ${COLORS.darkBlue};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PesquiseInput = styled.input`
  height: 2rem;
  width: 20rem;
  padding-left: 10px;
  border: 3px solid transparent;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding-top: 5px;
  padding-left: 2px;
`;

export const SearchIcon = styled.img`
  height: 2rem;
  width: 2rem;
  border: 3px solid transparent;
  border-radius: 4px;
  transition: border 0.3s ease;

  &:hover {
    border-color: ${COLORS.darkGray};
  }
`;

