import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 16px = 1.6rem
  }
  
  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  span {
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
