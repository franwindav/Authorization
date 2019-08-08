import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle_ = createGlobalStyle`
   body {
      margin: 0;
      min-height: 100vh;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
      overflow: hidden;
   }
`;

export const Main_ = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Poppins', sans-serif;
`;

export const Form_ = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Poppins', sans-serif;
   margin-top: 150px;
   padding: 5px 50px 20px 50px;
   border-radius: 20px;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
`;

export const Title_ = styled.h1`
   display: inline-block;
   width: 500px;
   margin-bottom: 25px;
   font-size: 24px;
   color: #333333;
   line-height: 1.2;
   text-align: center;
`;

export const Button_ = styled.button`
   width: 200px;
   height: 50px;
   margin: auto;
   background: #57b846;
   border: none;
   border-radius: 25px;
   color: #fff;
   font-family: 'Montserrat', sans-serif;
   line-height: 1.5;
   font-size: 15px;
   text-transform: uppercase;
   transition: all 0.4s ease-in-out;
   outline: none;
   cursor: pointer;
   &:hover {
      background: #333333;
   }
`;

export const Link_ = styled.a`
   text-decoration: none;
`;

export const Logout_ = styled.div`
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   right: 40px;
   top: 40px;
   width: 18px;
   height: 18px;
   padding: 18px;
   padding-left: 20px;
   border-radius: 50%;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
   font-size: 22px !important;
   color: #a6a6a6 !important;
   transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
   &:hover {
      color: #737373 !important;
      transform: scale(1.05);
   }
`;
export const Ico_ = styled.i`
   margin: 0;
   &.logout {
      margin-left: 2px;
   }
`;
