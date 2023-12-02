import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const HeaderLogo = styled.img`
    padding-right:50px;
    width: 25%;
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

export const Pesquise = styled.input`
  border-radius: 3px;
  tex-declaration: none;
  width: 200%;
  height: 50px;
`