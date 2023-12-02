import Styled from 'styled-components'
import {COLORS } from "../../constants/colors"

export const CardPlaylist = Styled.div`
display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(140px, 1fr); 
  gap: 16px;
  padding-bottom: 10px;
  padding-top: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Adiciona um desempenho suave de rolagem em dispositivos iOS */

  scrollbar-color: ${COLORS.darkGray} transparent; 
  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.darkGray};
    border-radius: 5px;
  }
`
export const AllPlaylist = Styled.div`
  heigth: 100%;
`
export const Title = Styled.h1`
    color: ${COLORS.darkGray};
    margin: 30px 0 0 0;
`
export const CardContainer = Styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border-radius: 5px;
  border: 1px solid black;  
  &: hover {
    background-color: ${COLORS.whitegray};
    transform: translateY(-5px);
  };
`;

export const CardInfo = Styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const CardImage = Styled.img`
    width: 70px
`;

export const CardTitle = Styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: ${COLORS.iceblue};
  margin: 4px 0;
`;

export const CardDescription = Styled.p`
  font-family: 'Arial', sans-serif; 
  font-size: 14px;
  color: ${COLORS.darkGray};
  margin: 4px 0;
`;

// COMECA OS STYLED COMPONENTS DO COMPONENTE DE ADICIONAR PLAYLIST

export const ContainerAddPlaylist = Styled.div`
position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

// Estilos para o formulário
export const FormAddPlaylist = Styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

// Estilos para o conteúdo da esquerda (imagem e título)
export const LeftContentAddPlaylist = Styled.div`
  margin-right: 20px;
`;

export const TitleAddPlaylist = Styled.h1`
  margin-bottom: 10px;
`;

export const ImageAddPlaylist = Styled.img`
  max-width: 100px;
  height: auto;
`;

// Estilos para os inputs
export const FormInputsAddPlaylist = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputAddPlaylist = Styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const ButtonAddPlaylist = Styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

export const BackButtonAddPlaylist = Styled(ButtonAddPlaylist)`
  position: absolute;
  top: 10px;
  left: 10px;
`;