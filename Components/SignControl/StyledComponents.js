import styled from 'styled-components';

const SignControl_ = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 20px;
`;

const Sign_ = styled.button`
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
   &.main:hover {
      background: #00cccc;
   }
`;

const SignSeparator_ = styled.div`
   margin: 10px 0;
`;
export { SignControl_, Sign_, SignSeparator_ };
