import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/Coordinator";
import  Styled from 'styled-components'


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
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const BackButton = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Button onClick={()=>{props.navigation(navigate)}}>Voltar</Button>
        </>
    )
}