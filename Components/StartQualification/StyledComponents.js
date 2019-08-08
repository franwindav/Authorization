import styled, { createGlobalStyle, css } from 'styled-components';
import { loadGetInitialProps } from 'next-server/dist/lib/utils';

export const GlobalStyle_ = createGlobalStyle`
   body {
      margin: 0;
      min-height: 100vh;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
      overflow: hidden;
   }
`;

export const Form_ = styled.div`
   font-family: 'Poppins', sans-serif;
   margin-top: 150px;
   padding: 5px 50px 20px 50px;
   border-radius: 20px;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
`;

export const Qualification_ = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Poppins', sans-serif;
`;

export const Title_ = styled.h1`
   display: inline-block;
   width: 500px;
   font-size: 24px;
   color: #333333;
   margin-bottom: 5px;
   line-height: 1.2;
   text-align: center;
`;

export const Button_ = styled.button`
   display: inline-block;
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
   &:not(:last-child) {
      margin-right: 10px;
   }
   &:hover {
      background: #333333;
   }
`;

export const Container_ = styled.div`
   display: flex;
   justify-content: center;
`;

export const Results_ = styled.div`
   text-align: center;
   color: #808080;
   font-size: 21px;
   margin-bottom: 15px;
`;

export const Link_ = styled.a`
   text-decoration: none;
   &:not(:last-child) {
      margin-right: 10px;
   }
`;

export const Progress_ = styled.div`
   position: relative;
   width: min-content;
   white-space: nowrap;
   min-width: 300px;
   height: 30px;
   margin: auto;
   margin-bottom: 25px;
   padding: 5px;
   padding-left: 0;
   border: 1px solid #6c757d;
   border-radius: 25px;
`;

export const ProgressLine_ = styled.div`
   display: inline-block;
   height: 100%;
   background-color: ${props => props.color};
   width: ${props => props.procent * 3}px;
   margin-left: 5px;
   border-radius: 25px;
`;
