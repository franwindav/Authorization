import styled, { createGlobalStyle } from 'styled-components';

const Authorization_ = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Error_ = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   width: min-content;
   height: min-content;
   margin: auto;
   margin-top: 30px;
   padding: 20px 60px 20px 50px;
   border-radius: 20px;
   background-color: white;
   box-shadow: 0 0 30px 2px rgba(255, 0, 0, 1);
   font-family: 'Poppins', sans-serif;
   white-space: nowrap;
   color: rgba(220, 20, 60, 0.7);
   transform: scale(1);
   transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
   &.clear {
      opacity: 0;
   }
   &:hover {
      transform: scale(1.1);
   }
`;

const GlobalStyle = createGlobalStyle`
   body {
      min-height: 100vh;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
   }
`;

export { Authorization_, Error_, GlobalStyle };
