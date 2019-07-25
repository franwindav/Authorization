import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
      min-height: 100vh;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
   }
`;

const Success_ = styled.div`
   width: min-content;
   height: min-content;
   margin: auto;
   margin-top: 150px;
   padding: 20px 60px 20px 50px;
   border-radius: 20px;
   background-color: white;
   box-shadow: 0 0 30px 2px rgb(51, 204, 51, 0.95);
   font-family: 'Poppins', sans-serif;
   font-size: 19px;
   white-space: nowrap;
   color: rgba(51, 204, 51, 0.7);
   transform: scale(1);
   transition: transform 0.3s ease-in-out;
   &:hover {
      transform: scale(1.1);
   }
`;

const Link_ = styled.a`
   text-decoration: none;
   color: #1a1a1a;
`;

const GoToMain_ = styled.button`
   display: block;
   width: min-content;
   height: min-content;
   margin: auto;
   margin-top: 40px;
   padding: 20px 40px 20px 40px;
   border-radius: 20px;
   border: none;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
   font-family: 'Poppins', sans-serif;
   font-size: 19px;
   font-weight: bold;
   color: #333333;
   text-transform: uppercase;
   text-decoration: none;
   white-space: nowrap;
   outline: none;
   cursor: pointer;
   transform: scale(1);
   transition: transform 0.3s ease-in-out;
   &:hover {
      transform: scale(1.1);
   }
`;

export { Success_, Link_, GoToMain_, GlobalStyle };
