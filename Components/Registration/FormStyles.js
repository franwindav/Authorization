import styled from 'styled-components';

const Form_ = styled.form`
   margin-top: 150px;
   padding: 5px 50px 20px 50px;
   background-color: white;
   border-radius: 20px;
   box-shadow: 0 0 30px 2px #1a1a1a;
   font-family: 'Poppins', sans-serif;
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
   display: flex;
   align-items: center;
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

const Warn_ = styled.i`
   position: absolute;
   top: 13px;
   left: 300px;
   font-size: 25px !important;
   color: rgba(255, 0, 102, 0.75) !important;
`;

const MainRole_ = styled.div`
   cursor: pointer;
   -webkit-user-select: none;
`;

const Roles_ = styled.div`
   z-index: 100;
   position: absolute;
   top: 20px;
   left: 200px;
   display: flex;
   flex-direction: column;
   box-shadow: 0 0 30px -2px #1a1a1a;
   border-radius: 20px;
   overflow: hidden;
   visibility: hidden;
   opacity: 0;
   transition: all 0.4s ease-in-out;
   &.active {
      visibility: visible;
      opacity: 1;
   }
`;

const RoleContainer_ = styled.div`
   position: relative;
   &:not(:last-child) {
      border-bottom: 1px solid rgb(87, 184, 70);
   }
   &:hover .filter {
      background-color: rgba(87, 184, 70, 0.12);
      left: 0;
   }
`;

const RadioRole_ = styled.input`
   display: none;
   &:checked + .filter {
      background-color: rgba(87, 184, 70, 0.25) !important;
      left: 0;
   }
`;

const Filter_ = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   left: 100%;
   background-color: rgba(87, 184, 70, 0.25);
   cursor: pointer;
   transition: all 0.15s 0.1s ease-in;
`;

const Role_ = styled.div`
   display: flex;
   align-items: center;
   height: 30px;
   width: 180px;
   padding: 0 30px;
   background: #e6e6e6;
   color: #666666;
   font-size: 15px;
   line-height: 1.5;
   outline: none;
   transition: background-color 0.5s ease-in-out;
   cursor: pointer;
`;

const DataField_ = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   height: 50px;
   margin-top: 20px;
   padding: 0 30px 0 68px;
   border-radius: 25px;
   background: #e6e6e6;
   color: #666666;
   font-size: 15px;
   line-height: 1.5;
`;

const Label_ = styled.label``;
const Chosen_ = styled.span``;

export { Form_, Title_, Data_, Field_, Ico_, Warn_, MainRole_, Roles_, RoleContainer_, RadioRole_, Filter_, Label_, Role_, Chosen_, DataField_ };
