import styled from 'styled-components';

const Form_ = styled.form`
   font-family: 'Poppins', sans-serif;
   margin-top: 150px;
   padding: 5px 50px 20px 50px;
   border-radius: 20px;
   background-color: white;
   box-shadow: 0 0 30px 2px #1a1a1a;
`;

const Title_ = styled.h1`
   font-size: 27px;
   color: #333333;
   line-height: 1.2;
   text-align: center;
`;

const Data_ = styled.div`
   position: relative;
`;

const Field_ = styled.input`
   display: block;
   height: 50px;
   margin-top: 20px;
   padding: 0 30px 0 68px;
   border-radius: 25px;
   background: #e6e6e6;
   color: #666666;
   font-size: 15px;
   line-height: 1.5;
   outline: none;
   border: none;
   box-shadow: 0px 0px 0px 0px rgba(87, 184, 70, 0.8);
   transition: box-shadow 0.5s ease-in-out;
   &:focus {
      animation: anim-shadow 0.5s ease-in-out, anim-scale 0.5s ease-in-out;
      box-shadow: 2px 5px 10px -3px rgba(87, 184, 70, 0.8);
   }
   &:focus + .ico {
      left: 25px;
      color: rgba(87, 184, 70, 0.8) !important;
      animation: anim-scale 0.5s ease-in-out forwards;
   }

   @keyframes anim-scale {
      50% {
         transform: scale(1.1);
      }
      to {
         transform: scale(1.05);
      }
   }

   @keyframes anim-shadow {
      60% {
         box-shadow: 0px 0px 70px 25px rgba(87, 184, 70, 0);
      }
      61% {
         box-shadow: 0px 0px 0 0 rgba(87, 184, 70, 0.8);
      }
      to {
         box-shadow: 2px 5px 10px -3px rgba(87, 184, 70, 0.8);
      }
   }
`;
const Ico_ = styled.i`
   position: absolute;
   top: 13px;
   left: 35px;
   font-size: 25px !important;
   color: #666666 !important;
   transition: all 0.5s ease-in-out;
`;
export { Form_, Title_, Data_, Field_, Ico_ };
