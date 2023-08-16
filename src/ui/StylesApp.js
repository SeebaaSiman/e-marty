import { createGlobalStyle } from "styled-components";

export const device = {
  sm: `(min-width: 480px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1200px)`,
};

export const StylesApp = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Serif';
  }
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    user-select: none; /* evita que se seleccione el texto */

}
body {
  overflow-x: hidden;
}
html{
  scroll-behavior: smooth;
}
/* ::-webkit-scrollbar {
    width: 0;
    display: none;
  } */
`
 /* background-color: ${(props) =>
props.theme === 'dark' ? darkTheme.backgroundColor : lightTheme.backgroundColor};
color: ${(props) =>
props.theme === 'dark' ? darkTheme.textColor : lightTheme.textColor}; */