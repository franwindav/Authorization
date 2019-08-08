import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle_ = createGlobalStyle`
   body {
      margin: 0;
      min-height: 100vh;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
      overflow: hidden;
   }
`;

export const Error_ = styled.div`
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

export const Qualification_ = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Poppins', sans-serif;
`;

export const Form_ = styled.form`
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
   font-size: 24px;
   color: #333333;
   line-height: 1.2;
   text-align: center;
`;

export const AnswerChoices_ = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 30px;
   margin-bottom: 25px;
`;

export const Label_ = styled.label`
   display: flex;
   align-items: center;
   font-size: 18px;
`;

export const CheckBox_ = styled.input`
   display: none;
   &:checked + .checkbox {
      border-color: rgba(87, 184, 70, 0.8);
   }
   &:checked + .checkbox .dot {
      opacity: 1;
      background-color: rgba(87, 184, 70, 0.8);
   }
`;

export const CustomCheckBox_ = styled.div`
   position: relative;
   width: 13px;
   height: 13px;
   border: 1px solid #666666;
   margin-right: 5px;
   transition: all 0.7s ease-in-out;
   border-radius: 25%;
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
   &.radio {
      border-radius: 50%;
   }
`;

export const Dot_ = styled.div`
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

export const Container_ = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Send_ = styled.button`
   width: 150px;
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
   &.ico {
      display: flex;
      width: 17px;
      height: 17px;
      padding: 12px;
      border-radius: 50%;
      box-sizing: unset;
      font-size: 17px !important;
   }
`;

export const Link_ = styled.a`
   color: black;
   text-decoration: none;
`;

export const ShowQuestions_ = styled.div`
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   left: 40px;
   top: 40px;
   width: 18px;
   height: 18px;
   padding: 18px;
   border-radius: 50%;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
   font-size: 18px !important;
   color: #a6a6a6 !important;
   transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
   &:hover {
      color: #737373 !important;
      transform: scale(1.05);
   }
`;

export const GoToMain_ = styled.div`
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   right: 40px;
   top: 40px;
   width: 18px;
   height: 18px;
   padding: 18px;
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
   &.left::before {
      margin-left: 1px;
   }

   &.right::before {
      margin-left: 4px;
   }
   &.error {
      position: absolute;
      right: 14px;
      top: 9px;
      color: red;
      font-size: 22px;
   }
   &.success {
      position: absolute;
      right: 10px;
      top: 9px;
      color: green;
      font-size: 22px;
   }
`;

export const QuestionsList_ = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   left: 70px;
   top: 140px;
   max-height: 600px;
   padding: 10px 0;
   border-radius: 17px;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
   overflow-y: scroll;
   transition: left 0.55s ease-in-out;
   -ms-overflow-style: none;
   scrollbar-width: none;
   &.hiden {
      left: -470px;
   }
   &::-webkit-scrollbar {
      display: none;
   }
`;

export const Question_ = styled.div`
   position: relative;
   width: 450px;
   padding: 7px 40px 12px 20px;
   box-sizing: border-box;
   transition: background 0.3s ease-in-out;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   &:hover {
      background-color: rgba(0, 0, 0, 0.06);
   }
   &.active {
      background-color: rgba(0, 0, 0, 0.17) !important;
   }
`;

export const Code_ = styled.p`
   display: block;
   width: 500px;
   font-size: 17px;
   color: #595959;
   text-align: left;
   line-height: 1.2;
   margin: 13px 0;
`;
