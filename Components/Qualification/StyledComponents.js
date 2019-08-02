import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle_ = createGlobalStyle`
   body {
      margin: 0;
      min-height: 100vh;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
      overflow: hidden;
   }
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

const Qualification_ = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Poppins', sans-serif;
`;

const Form_ = styled.form`
   font-family: 'Poppins', sans-serif;
   margin-top: 150px;
   padding: 5px 50px 20px 50px;
   border-radius: 20px;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
`;

const Title_ = styled.h1`
   display: inline-block;
   width: 500px;
   font-size: 24px;
   color: #333333;
   line-height: 1.2;
   text-align: center;
`;

const AnswerChoices_ = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 10px;
`;

const Label_ = styled.label`
   display: flex;
   align-items: center;
   font-size: 18px;
`;

const CheckBox_ = styled.input`
   display: none;
   &:checked + .checkbox {
      border-color: rgba(87, 184, 70, 0.8);
   }
   &:checked + .checkbox .dot {
      opacity: 1;
      background-color: rgba(87, 184, 70, 0.8);
   }
`;

const CustomCheckBox_ = styled.div`
   position: relative;
   width: 13px;
   height: 13px;
   border-radius: 50%;
   border: 1px solid #666666;
   margin-right: 5px;
   transition: all 0.7s ease-in-out;
   &.success {
      border-color: rgba(87, 184, 70, 0.8);
      & .dot {
         opacity: 1;
         background-color: rgba(87, 184, 70, 0.8);
      }
   }
   &.error {
      border-color: rgba(220, 20, 60, 0.7);
      & .dot {
         opacity: 1;
         background-color: rgba(220, 20, 60, 0.7);
      }
   }
`;

const Dot_ = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   margin: auto;
   width: 9px;
   height: 9px;
   border-radius: 50%;
   background-color: #666666;
   opacity: 0;
   transition: all 0.7s ease-in-out;
`;

const Container_ = styled.div`
   display: flex;
   justify-content: center;
`;

const Send_ = styled.button`
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

const Link_ = styled.a`
   text-decoration: none;
`;

export { GlobalStyle_, Qualification_, Form_, Title_, AnswerChoices_, CheckBox_, CustomCheckBox_, Label_, Dot_, Send_, Container_, Error_, Link_ };
