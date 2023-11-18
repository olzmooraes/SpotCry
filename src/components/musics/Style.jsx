import { styled } from "styled-components"
import { COLORS } from "../../constants/colors";

export const Title = styled.h1`
    color: ${COLORS.yellow};
`

export const CardMusic = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;

`
export const CardContainer = styled.div`
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

export const CardImage = styled.img`
    width: 100%;
`;

export const CardInfo = styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const CardTitle = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: ${COLORS.darkYellow};
  margin: 4px 0;
`;

export const CardDescription = styled.p`
  font-family: 'Arial', sans-serif; 
  font-size: 14px;
  color: ${COLORS.darkGray};
  margin: 4px 0;
`;