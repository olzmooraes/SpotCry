import Styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const UserPlaylist = Styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  gap: 5px;
  padding: 15px;
  border-top: 1px solid white;
  > h4 {
    align-items: center;
  }
`
export const UserContainer = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${COLORS.whitegray};
  border-bottom: 1px solid ${COLORS.purple};
  color: ${COLORS.whiteBlue};
  &: hover {
    background-color: ${COLORS.white};
  };
`;

export const UserInfo = Styled.div`
  margin-top: 8px;
  text-align: center;
  cursor: pointer;
`;

export const UserImage = Styled.img`
    width: 30%;
    cursor: pointer;
`;
export const UserMyPlaylists = Styled.h4`
font-family: 'Arial', sans-serif;
margin-bottom: 5px;
display: flex !important;
justify-content: center;
padding: 5px 15px;
width: 80%;
background-color: ${COLORS.gray};
cursor: pointer;
border-radius: 20px;
border: 2px solid ${COLORS.gray};
color: ${COLORS.whitegray};
&:hover {
  background-color: ${COLORS.whitegray};
  border-radius: 20px;
  border: 2px solid ${COLORS.gray};
  color: ${COLORS.gray};
}
`

export const UserTitle = Styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: ${COLORS.iceblue};
  margin: 4px 0;
`;

export const UserDescription = Styled.p`
  font-family: 'Arial', sans-serif; 
  font-size: 14px;
  margin: 4px 0;
  color: ${COLORS.darkGray};
`;