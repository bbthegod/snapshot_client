import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    color: '#262626';
    font-size: 14;
    background: '#FAFAFA';
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Roboto';
    min-height: '100%';
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }
`;
