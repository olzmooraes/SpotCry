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

export const CardPlaylist = styled.li`
    font-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    padding-left: 20px;
    padding-bottom: 20px;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 250px;
    transition: all 0.3s ease-out;
    button:hover{
        transform: translateY(-1px);
        cursor: pointer;
    }
`
