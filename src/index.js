import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.2;
  }
  .container{
    width: 100%;
    height: 100vh;
    margin: 10px auto;
    display: grid;
    place-items: center;

    @media only screen and (max-width: 768px){
      margin: 10px;
  }
  .grid-4{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media only screen and (max-width: 768px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 580px){
      grid-template-columns: 1fr;
    }
  }
  .touch-slider {
    height: 450px;
    padding: 20px;
    overflow-x: auto;

    .touch-outer-slider{
      width: 1100px;
      position: relative;
    }

    .touch-inner-slider{
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 300px;
      gap: 20px;
      position: absolute;
      left:0;
    }    
  }

  .touch-slider::-webkit-scrollbar,
  .touch-slider::-webkit-scrollbar-track {
    display: none;
  }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
