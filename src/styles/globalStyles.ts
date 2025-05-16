import { createGlobalStyle } from "styled-components";
import { DS_Colors } from "../DS/colors";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  :root {
    --primary: ${DS_Colors.color.button};
    --white: ${DS_Colors.white};
    --black: ${DS_Colors.black};
  }
`;
