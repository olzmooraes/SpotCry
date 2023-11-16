import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', sans-serif;
    font-weight: 400;
    color: #333;
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: #333;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
