import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle_ = createGlobalStyle`
   body {
      margin: 0;
      min-height: 100vh;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
      overflow: hidden;
   }
`;

const Form_ = styled.div`
   font-family: 'Poppins', sans-serif;
   margin-top: 150px;
   padding: 5px 50px 20px 50px;
   border-radius: 20px;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
`;

const Qualification_ = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Poppins', sans-serif;
`;

const Title_ = styled.h1`
   display: inline-block;
   width: 500px;
   font-size: 24px;
   color: #333333;
   margin-bottom: 5px;
   line-height: 1.2;
   text-align: center;
`;

const Button_ = styled.button`
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

const Container_ = styled.div`
   display: flex;
   justify-content: center;
`;

const Results_ = styled.div`
   text-align: center;
   color: #808080;
   font-size: 21px;
   margin-bottom: 30px;
`;

const Link_ = styled.a`
   text-decoration: none;
   &:not(:last-child) {
      margin-right: 10px;
   }
`;
module.exports = { GlobalStyle_, Form_, Qualification_, Title_, Button_, Container_, Results_, Link_ };
