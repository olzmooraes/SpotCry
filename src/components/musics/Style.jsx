import { styled } from "styled-components"
import { COLORS } from "../../constants/colors";

export const Title = styled.h1`
    color: ${COLORS.yellow};
    margin: 20px 0;
`

export const CardMusic = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;

`
export const CardContainer = styled.div`
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
`;

export const CardImage = styled.img`
    width: 100%;
`;

export const CardInfo = styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const CardTitle = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: ${COLORS.darkYellow};
  margin: 4px 0;
`;

export const CardDescription = styled.p`
  font-family: 'Arial', sans-serif; 
  font-size: 14px;
  color: ${COLORS.darkGray};
  margin: 4px 0;
`;


// COMECA OS STYLED COMPONENTS DO COMPONENTE DE ADICIONAR PLAYLIST

export const ContainerAddMusic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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