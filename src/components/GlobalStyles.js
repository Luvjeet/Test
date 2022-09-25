import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --hsl-value: 205;
  --white-color: #fff;
  --black-color: #000;
  --first-color: 	hsl(var(--hsl-value), 65%, 18%);
  --second-color: hsl(var(--hsl-value),92%,80%);
  --third-color: hsl(160, 93%, 45%);
  /* font sizes */
  --big-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal-font-size: 1.1rem;
  --small-font-size: 0.913rem;
  --smaller-font-size: 0.85rem;
}

body{
  font-family: Arial, Helvetica, sans-serif;
}

`;

export default GlobalStyles;
