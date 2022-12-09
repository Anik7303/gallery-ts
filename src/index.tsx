import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-white: #f7f7f7;
    --color-black: #222222;
    --color-gray: #cccccc;
    --color-red: #ca0f0f;
    --color-primary: #0871b8;
    --color-secondary: #07a563;
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
    background-color: var(--color-white);
    color: var(--color-black);
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
