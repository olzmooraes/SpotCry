import Styled from 'styled-components'
import {COLORS} from '../../constants/colors'

export const UserPlaylist = Styled.div`
    display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(140px, 1fr); 
  gap: 16px;
  padding-bottom: 10px;
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
export const UserContainer = Styled.div`
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

export const UserInfo = Styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const UserImage = Styled.img`
    width: 70px
`;

export const UserTitle = Styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: ${COLORS.iceblue};
  margin: 4px 0;
`;

export const UserDescription = Styled.p`
  font-family: 'Arial', sans-serif; 
  font-size: 14px;
  color: ${COLORS.darkGray};
  margin: 4px 0;
`;