import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        * {     
                ul, li, button, input, a{
                        all: unset;
                        box-sizing: border-box;
                }
                body{
                          background-color: #333333;
                }
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font-weight: normal;
                vertical-align: baseline;
                font-family: 'Lato', sans-serif;;
                box-sizing: border-box;
               ::-webkit-scrollbar {
                        width: 8px;
                        border-radius:8px;
                        }
                ::-webkit-scrollbar-track {
	                background: none; 
                        border-radius:8px;
                        }
                ::-webkit-scrollbar-thumb {
                        background: #535353; 
                        border-radius:8px;
                        }
                ::-webkit-scrollbar-thumb:hover {
                        background: #535353; 
                        border-radius:8px;
                        }
        }

`;

export { GlobalStyle };
