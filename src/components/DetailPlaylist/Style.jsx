import Styled from 'styled-components'
import {COLORS} from '../../constants/colors'


export const Button = Styled.button`
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


export const Container = Styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

export const MusicContainer = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 10rem;
  align-items: center;
  padding: 0 0 0 15vw;
  cursor: pointer;
  margin: 0 20rem;
  border: 1px solid ${COLORS.gray};
  &:hover{
    background-color: ${COLORS.iceblue}
  }
  img {
    margin: 1rem;
    width: 40%;
    height: auto;
  }
  
`;
export const Main = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;
export const ContainerMusic = Styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width:5px;
  }
  &::-webkit-scrollbar-thumb {
  background-color: ${COLORS.darkGray};
  border-radius: 5px;
  }
`

export const MusicImage = Styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const MusicInfo = Styled.div`
  margin-left: 10px;
`;

export const MusicName = Styled.span`
  font-weight: bold;
`;

export const MusicArtist = Styled.span`
  font-size: 12px;
`;

export const Header = Styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100%;
  background-color: ${COLORS.gray};
`;
export const DivContent = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const PlaylistImage = Styled.img`
  width: 200px; 
  height: 200px; 
  object-fit: cover; /* Para garantir que a imagem se ajuste corretamente */
`;

export const PlaylistName = Styled.h1`
  margin-top: 10px;
  font-size: 1.5em;
`;

export const ArtistSubtitle = Styled.h2`
  font-size: 1em; 
  color: #888; 
`;