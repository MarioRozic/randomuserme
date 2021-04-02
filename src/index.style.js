import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #f0f2f5;
        overflow: hidden;
    }
`;

const Container = styled.div`
  padding-top: 50px;
  overflow: auto;
  height: 100vh;
  box-sizing: border-box;
`;

export { GlobalStyle, Container };
