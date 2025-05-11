import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        
    }`;

export const colorsTheme = {
  background: "#F89F1B",
  backgrounOpacity: "rgba(46, 46, 46, 0.66)",
  text: "#000",
  black: "rgba(0, 0, 0)",
  secondary: " #d6d6ba",
  success: "#28a745",
  error: "rgb(255, 0, 0)",
  shadow: " rgba(0, 0, 0, 0.90)",
  warning: "rgb(248, 236, 0)",
  info: "#D9D9D9",
  light: "rgb(255, 255, 255)",
  hover: "rgb(255, 219, 147)",
  border: "#555555",
};
