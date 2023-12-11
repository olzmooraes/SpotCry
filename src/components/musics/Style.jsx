import { styled } from "styled-components"
import { COLORS } from "../../constants/colors";

export const Title = styled.h1`
    color: ${COLORS.darkGray};
    margin: 20px 0;
`
export const AllSongs = styled.div`
  //height: calc(100% - 100px - 252px) !important;
  height: 52.5vh;
`
export const CardMusic = styled.div`
display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  overflow-y: scroll;
  max-height: 80%;
  &::-webkit-scrollbar {
    width:5px;
  }
  &::-webkit-scrollbar-thumb {
  background-color: ${COLORS.darkGray};
  border-radius: 5px;
  }
`
export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  border-radius: 5px;
  border-top: 2px solid ${COLORS.whitegray}; 
  justify-content: space-around;
`;

export const CardInfo = styled.div`
  margin-top: 8px;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: ${COLORS.iceblue};
  margin: 4px 0;
`;

export const CardDescription = styled.p`
  font-family: 'Arial', sans-serif; 
  font-size: 14px;
  color: ${COLORS.darkGray};
  margin: 4px 0;
`;

export const CardAdd = styled.div`
  margin-top: 8px;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
`;

// COMECA OS STYLED COMPONENTS DO COMPONENTE DE ADICIONAR MUSIC

export const ContainerAddMusic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent !important;
`;

// Estilos para o formulário
export const FormAddMusic = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Estilos para o conteúdo da esquerda (imagem e título)
export const LeftContentAddMusic = styled.div`
  margin-right: 20px;
`;

export const TitleAddMusic = styled.h1`
  margin-bottom: 10px;
`;

export const ImageAddMusic = styled.img`
  max-width: 100px;
  height: auto;
`;

// Estilos para os inputs
export const FormInputsAddMusic = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputAddMusic = styled.input`
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

export const ButtonAddMusic = styled.button`
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

export const BackButtonAddMusic = styled(ButtonAddMusic)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

// CODIGO DO POP-UP DE ADICIONAR AS MUSICAS

export const PopupContainer = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const PopupContent = styled.div`
background-color: white;
padding: 20px;
border: 1px solid black;
width: 500px;
height: auto;

`;

export const PopupTitle = styled.h2`
  color: ${COLORS.darkGray}
  font-size: 16px;
`;

export const PopupList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-Height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width:5px;
  }
  &::-webkit-scrollbar-thumb {
  background-color: ${COLORS.darkGray};
  border-radius: 5px;
  }
`;

export const PopupListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
export const PopupListItemActived = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
    background-color: #eee;
`;

export const PopupButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

export const HeaderPopUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
  font-size: 1rem;
`;

export const TableHeaders = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.lightGray};
  padding: 10px;
  cursor: pointer;
`;

export const TableHeader = styled.div`
  flex: 1;
  text-align: center;
`;