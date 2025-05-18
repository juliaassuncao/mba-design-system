import { createGlobalStyle } from "styled-components";
import { DS_Colors } from "../DS/colors";

export const GlobalStyles = createGlobalStyle`
  /* Google Font Inter */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    height: 100vh;
    background-color: ${DS_Colors.background.primary};
    color: ${DS_Colors.content.primary};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea, button {
    font-family: inherit;
  }
`

