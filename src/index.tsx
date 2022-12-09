import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #f7f7f7;
    --black: #222222;
    --gray: #cccccc;
    --red: #ca0f0f;
    --primary: #0871b8;
    --secondary: #07a563;
  }

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
    background-color: var(--white);
  }

  #root {
    width: 100%;
  }
`;

const domNode = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(domNode);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
