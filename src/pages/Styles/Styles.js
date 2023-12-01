import styled from "styled-components";
import loginBackground from "../../assets/loginBackground.png";
import {COLORS} from "../../constants/colors"

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${loginBackground});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
`;

export const FeedContainer = styled.div`
  display:flex;
  justify-content: center;
  alling-items: center;
  flex-direction: column;
  width: 80vw;
  height: 100% !important;
  padding-left: 10px;
`
export const Main = styled.div`
  display:flex;
  justify-content: center;
  alling-items: center;
  height: 100% !important;
`
export const MyPlaylist = styled.div`
  width: 20vw;
  background-color: ${COLORS.whitegray};
`
export const Feed = styled.section`
  heigth: 100vh;
`
export const Bibliary = styled.button`
  display: flex !important;
  padding: 10px 30px;
  width: 100%;
  background-color: ${COLORS.whitegray};
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${COLORS.white};
    border-radius: 20px;
  }
`