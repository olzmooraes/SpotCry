import styled from "styled-components";
import loginBackground from "../../assets/loginBackground.png";

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
  padding-left: 10px;
`
export const Main = styled.div`
  display:flex;
  justify-content: center;
  alling-items: center;
  height: 100%;
`
export const MyPlaylist = styled.div`
  width: 20vw;
  background-color: orange;
`
