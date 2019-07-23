import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  input, textarea, button, div, section {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
