import Styled from 'styled-components'


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

export const BackButton = Styled(Button)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Container = Styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;
