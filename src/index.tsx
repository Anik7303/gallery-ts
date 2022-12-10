import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import App from "./App";
import { lightTheme } from "./themes/light";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  html {
    font-size: 100%;
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${(p) => p.theme.color.white};
    color: ${(p) => p.theme.color.black};
  }

  #root {
    width: 100%;
  }
`;

const domNode = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(domNode);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
