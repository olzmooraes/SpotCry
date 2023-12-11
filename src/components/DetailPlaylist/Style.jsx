import Styled from 'styled-components'
import {COLORS} from '../../constants/colors'


export const Home = Styled.button`
padding: 2rem 2rem;
background-color: ${COLORS.iceblue};
border: 1px;
border-radius: 1px;
border-color: ${COLORS.darkGray};
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: background-color 0.3s ease;

svg {
  width: 2rem;
  height: 2rem;
}

&:hover {
  background-color: ${COLORS.darkGray};
}
`;


export const Container = Styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

export const RemoveIcon = Styled.button`
display: flex;
justify-content: center;
align-items: center;
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
  height: 20vh;
  width: 100%;
  background-color: ${COLORS.iceblue};
`;
export const DivContent = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const PlaylistImage = Styled.img`
  width: 5rem; 
  height: 5rem; 
  object-fit: cover;
`;

export const PlaylistName = Styled.h1`
  margin-top: 10px;
  font-size: 1.5em;
  padding-left: 10px;
`;

export const ArtistSubtitle = Styled.h2`
  font-size: 1em; 
`;