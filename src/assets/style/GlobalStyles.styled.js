import { createGlobalStyle } from 'styled-components';
// import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #ffffff; 
    color: #333333; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 16px;
    color: #222222;
  }

  p {
    margin-bottom: 1em;
    color: #333333; /* Paragraph text color */
  }

  ul, ol {
    margin-left: 20px;
    margin-bottom: 1em;
    list-style-position: inside;
  }

  a {
    color: #007BFF; /* Link color */
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #0056b3;
    }
  }
`;
