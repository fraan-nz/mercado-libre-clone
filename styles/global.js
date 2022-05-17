import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @font-face {
  font-family: 'Proxima Nova';
  src: url('./fonts/ProximaNova.otf');
  font-style: normal;
  }

  *, *::after, *::before{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family: "Proxima Nova",-apple-system,"Helvetica Neue",Helvetica,Roboto;
  }
  html {
    scroll-behavior:smooth;
    font-size: 16px;
  }
  body {
    color: ${(props) => props.theme.text.green};
    background: ${(props) => props.theme.bg.grey};
    
    & > div {
      display: flex;
    flex-direction: column;
    min-height: 100vh;

    & > main {
    flex:1;
    height: 100%;
  }
    }
    
  }
  
`;
