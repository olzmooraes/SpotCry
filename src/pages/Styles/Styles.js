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
  margin: 0 10rem;
  height: 100%;
  flex-direction: column;
`
